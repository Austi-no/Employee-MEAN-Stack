const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { mongoose } = require("./db/dbconnect.js");
const employeeController = require("./controllers/employeeController.js");

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.listen(9000, () => console.log("Server Started at port: 9000"));

app.use("/employees", employeeController);
