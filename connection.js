const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparse = require("body-parser");
const Razorpay = require("razorpay");
const Schema = require("../model/schema");

var instance = new Razorpay({
  key_id: " rzp_test_wpSdet51pbxiwK ",
  key_secret: " loD9eyqImDkPp4Xfa5yg8ZYI ",
});

const postRazorpay = async (req, res) => {
  const { amount, currency, receipt, notes } = req.body;
  try {
    if (!amount || !currency || !receipt || !notes) {
      res.status(500).send({
        message: "Enter all data",
        status: false,
      });
    } else {
      const razorPay = instance.orders.create({
        amount,
        currency,
        receipt,
        notes,
      });
      console.log(razorPay);

      if (!razorPay) {
        res.status(500).send({
          message: "Razorpay  not created ",
          status: false,
        });
      } else {
        res.status(200).send({
          message: "Razorpay created sucessfully",
          data: Razorpay,
          status: true,
        });
      }
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
      status: false,
    });
  }
};

module.exports = { postRazorpay };
