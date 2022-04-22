/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

// HEY THERE DIP, REMEMBER THAT THE event.json file simulates the requests within a local environment

var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
var axios = require("axios");

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

/**********************
 * Example get method *
 **********************/

app.get("/items", function (req, res) {
  const items = ["hello", "world"];
  res.json({ success: "get call succeed!", items });
});

/**********************
 * API 1 *
 **********************/
// Create a new user profile
app.post("/auth0createuser", (req, res) => {
  console.log("request:", req.query);
  const email = req.body.email;
  const given_name = req.body.given_name;
  const family_name = req.body.family_name;
  const password = req.body.password;
  console.log("1");
  console.log(req.body.email);

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
    console.log("2");
    let response = await axios(config);
    response = response.data.access_token;
    console.log(response);
    return response;
  }

  // Function sign up a new user
  function two(token) {
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

    // Need to swap local host with apprunner
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Use Effect that is triggered when step == 2 (When the user gets to the confirmation page)
  function one() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const error = false;
        console.log("3");
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
    console.log("step1");
    var token = await one();
    console.log("step2");
    two(token);
  }

  // Calling that parent function
  console.log("initstarted");
  init();

  res.send(`User Created`); //Line 10
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
  console.log("request:", req.query);
  const username = req.body.username;
  const password = req.body.password;

  console.log(req.body.email);

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
    console.log(response);
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

    theResponse = JSON.stringify(response.data.access_token);
    console.log("hey dude");
    console.log(theResponse);
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
    console.log("step1");
    var token = await one();
    console.log("step2");
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
  console.log("request:", req.query);
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
    console.log(response);
    return response;
  }

  // Reset a users password
  function two(token) {
    var data = JSON.stringify({
      client_id: "AnVYTtgcazP1CuOakkSDWDGaVa9EMjFi",
      email: "colin@banabo.io",
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

    // Need to swap local host with apprunner
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
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
    console.log("step1");
    var token = await one();
    console.log("step2");
    two(token);
  }

  // Calling that parent function
  console.log("initstarted");
  init();

  res.send(`Password Reset`); //Line 10
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
