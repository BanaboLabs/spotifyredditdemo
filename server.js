/**********************
 * THIS Server.js FILE IS ONLY MEANT TO BE USED FOR LOCAL TESTING *
 * CAN BE INVOKED WITH NODE SERVER.JS *
 **********************/

// BASIC REQUIRMENTS
const express = require("express"); //Line 1
const cors = require("cors");
var axios = require("axios");

const app = express(); //Line 2
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
