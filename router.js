const express = require("express");
const router = express.Router();
const { postRazorpay } = require("../controller/connection");

const plan = require("../model/schema");

router.post("/post", postRazorpay);

module.exports = router;
