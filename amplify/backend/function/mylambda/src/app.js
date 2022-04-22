/**********************
 TABLE OF CONTENTS
 *
 - CONFIGURATION
 - API 1 - Create User
 - API 2 - Login User
 - API 3 - Password Reset
 *
 **********************/

/**********************
 * CONFIGURATION *
 **********************/

var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
var axios = require("axios");
var util = require("util");
var stringify = require("json-stringify-safe");

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "OPTIONS,POST,GET");
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header(
    "Accept",
    "application/hal+json,text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
  );

  next();
});

//
/**********************
 * API 1 *
 **********************/
// Create a new user profile
app.post("/auth0createuser", function (req, res) {
  const email = req.body.email;
  const given_name = req.body.given_name;
  const family_name = req.body.family_name;
  const password = req.body.password;

  var success = "1";

  // Get the Intial Token
  async function GetToken() {
    var data = JSON.stringify({
      client_id: "niLBrJUOAgKi20RFO2FZIH4CL02x18jJ",
      client_secret:
        "6uwowx0L5t0iwxjyIvFzN9RqsHiCO9F1dqZcjWhFZT7INQveoLNqLaK4FstzADHA",
      audience: "https://dev-bpy1ok2n.us.auth0.com/api/v2/",
      grant_type: "client_credentials",
    });

    var config = {
      method: "post",
      url: "https://dev-bpy1ok2n.us.auth0.com/oauth/token",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    let response = await axios(config);
    response = response.data.access_token;
    return response;
  }

  // Function sign up a new user
  // Needs to be async
  async function two(token) {
    var data = JSON.stringify({
      email: email,
      given_name: given_name,
      family_name: family_name,
      connection: "Username-Password-Authentication",
      password: password,
      verify_email: true,
    });
    //
    var config = {
      method: "post",
      url: "https://dev-bpy1ok2n.us.auth0.com/api/v2/users",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(token),
      },
      data: data,
    };

    // Need to make an await
    let response = await axios(config);
    // Res.send needs to sit at the bottom level of the function
    res.send(response.data);
  }

  // Use Effect that is triggered when step == 2 (When the user gets to the confirmation page)
  function one() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const error = false;
        if (!error) {
          resolve(GetToken());
        } else {
          reject("Error: Something went wrong!");
        }
      }, 2000);
    });
  }

  // Parent Function that allows us to run both functions within it
  async function init() {
    var token = await one();
    two(token);
  }

  // Calling that parent function
  init();

  //Line 10
}); //Line 11

//
//
//
//
//
//
/**********************
 * API 2 *
 **********************/
// Login a user
app.post("/auth0loginuser", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Get the Intial Token
  async function GetToken() {
    var data = JSON.stringify({
      client_id: "niLBrJUOAgKi20RFO2FZIH4CL02x18jJ",
      client_secret:
        "6uwowx0L5t0iwxjyIvFzN9RqsHiCO9F1dqZcjWhFZT7INQveoLNqLaK4FstzADHA",
      audience: "https://dev-bpy1ok2n.us.auth0.com/api/v2/",
      grant_type: "client_credentials",
    });

    var config = {
      method: "post",
      url: "https://dev-bpy1ok2n.us.auth0.com/oauth/token",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    let response = await axios(config);
    response = response.data.access_token;
    return response;
  }

  // Function
  async function two(token) {
    var data = JSON.stringify({
      grant_type: "password",
      client_id: "AnVYTtgcazP1CuOakkSDWDGaVa9EMjFi",
      client_secret:
        "236OD0-jmIU3m4_uTSRtUiZwJ8kugUmJkCs3qymbQxCmdql0VGxmQ3qUgSzaG3K_",
      username: username,
      password: password,
    });
    //
    var config = {
      method: "post",
      url: "https://dev-bpy1ok2n.us.auth0.com/oauth/token",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(token),
      },
      data: data,
    };

    let response = await axios(config);

    var theResponse = JSON.stringify(response.data.access_token);
    res.send(theResponse);
  }

  // Use Effect that is triggered when step == 2 (When the user gets to the confirmation page)
  function one() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const error = false;

        if (!error) {
          resolve(GetToken());
        } else {
          reject("Error: Something went wrong!");
        }
      }, 2000);
    });
  }

  // Parent Function that allows us to run both functions within it
  async function init() {
    var token = await one();
    two(token);
  }

  // Calling that parent function
  init();
  //Line 10
}); //Line 11

//
//
//
//
/**********************
 * API 3 *
 **********************/
// Reset a Users Password
app.post("/auth0passwordreset", (req, res) => {
  console.log("we here");
  const email = req.body.email;

  // Get the Intial Token
  async function GetToken() {
    var data = JSON.stringify({
      client_id: "niLBrJUOAgKi20RFO2FZIH4CL02x18jJ",
      client_secret:
        "6uwowx0L5t0iwxjyIvFzN9RqsHiCO9F1dqZcjWhFZT7INQveoLNqLaK4FstzADHA",
      audience: "https://dev-bpy1ok2n.us.auth0.com/api/v2/",
      grant_type: "client_credentials",
    });

    var config = {
      method: "post",
      url: "https://dev-bpy1ok2n.us.auth0.com/oauth/token",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    let response = await axios(config);
    response = response.data.access_token;
    console.log("Made it 1");
    return response;
  }

  // Reset a users password
  async function two(token) {
    var data = JSON.stringify({
      client_id: "AnVYTtgcazP1CuOakkSDWDGaVa9EMjFi",
      email: email,
      connection: "Username-Password-Authentication",
    });
    //
    var config = {
      method: "post",
      url: "https://dev-bpy1ok2n.us.auth0.com/dbconnections/change_password",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(token),
      },
      data: data,
    };

    // Need to make an await
    let response = await axios(config);
    console.log("made it 3");
    // Res.send needs to sit at the bottom level of the function
    res.send(response.data);
  }

  // Use Effect that is triggered when step == 2 (When the user gets to the confirmation page)
  function one() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const error = false;

        if (!error) {
          resolve(GetToken());
        } else {
          reject("Error: Something went wrong!");
        }
      }, 2000);
    });
  }

  // Parent Function that allows us to run both functions within it
  async function init() {
    var token = await one();
    console.log("made it 2");
    two(token);
  }

  // Calling that parent function
  init(); //Line 10
}); //Line 11
//
//
//
//
//
/**********************
 * API 4 *
 **********************/
// Get the number of logins from the user
app.post("/auth0getlogincount", (req, res) => {
  const email = req.body.email;
  console.log(email);
  console.log("made it 1");
  // Get the Intial Token
  async function GetToken() {
    var data = JSON.stringify({
      client_id: "niLBrJUOAgKi20RFO2FZIH4CL02x18jJ",
      client_secret:
        "6uwowx0L5t0iwxjyIvFzN9RqsHiCO9F1dqZcjWhFZT7INQveoLNqLaK4FstzADHA",
      audience: "https://dev-bpy1ok2n.us.auth0.com/api/v2/",
      grant_type: "client_credentials",
    });

    var config = {
      method: "post",
      url: "https://dev-bpy1ok2n.us.auth0.com/oauth/token",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    let response = await axios(config);
    response = response.data.access_token;
    return response;
  }

  // Function for grabbing the number of logins
  async function two(token) {
    console.log("made it 3");
    //
    var config = {
      method: "get",
      url: "https://dev-bpy1ok2n.us.auth0.com/api/v2/users-by-email",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(token),
      },
      params: { email: `${email}` },
    };

    let response = await axios(config);
    console.log(response);
    var circularObj = response;
    circularObj.circularRef = circularObj;
    circularObj.list = [circularObj, circularObj];
    var output = stringify(circularObj, null, 1);
    res.send(output);
  }

  // Use Effect that is triggered when step == 2 (When the user gets to the confirmation page)
  function one() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const error = false;

        if (!error) {
          resolve(GetToken());
        } else {
          reject("Error: Something went wrong!");
        }
      }, 2000);
    });
  }

  // Parent Function that allows us to run both functions within it
  async function init() {
    var token = await one();
    console.log(token);
    console.log("made it 2");
    two(token);
  }

  // Calling that parent function
  init();
  //Line 10
}); //Line 11

////
////
///
////

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
