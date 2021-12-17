"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const mongoURI = process.env.mongoURI || "mongodb://localhost/vending_machine";

const app = express();

// Logger middleware
app.use(logger("dev"));

// create application/json parser
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
  })
);

// Database Connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log(`Connected to Database`));

// catch 404
app.use((req, res) => {
  res.status(404).send({ message: "Route Not Found!!!", success: false });
});

module.exports = app;
