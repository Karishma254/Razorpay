const port = process.env.PORT || 8080;

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const bodyparse = require("body-parser");
const Razorpay = require("razorpay");

const router = require("./router/router");
// const model = require("../model/server");

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/dbRazorpay", {
    UseNewUrlParser: true,
    useunifiedtopology: true,
  })
  .then(() => {
    console.log("Database is connected ");
  })
  .catch(() => {
    console.log("Database is not connected");
  });

app.listen(port, () => {
  console.log(`local server started on http://localhost:${port}`);
});

app.use("/", router);
