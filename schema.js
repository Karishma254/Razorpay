const mongoose = require("mongoose");
const RazorSchema = new mongoose.Schema({
  amount: { type: String },
  currency: { type: String },
  receipt: { type: String },
  notes: {
    orderType: { type: String },
  },
});
module.exports = mongoose.model("planDetails", RazorSchema);

// var instance = new Razorpay({
//   key_id: " rzp_test_wpSdet51pbxiwK ",
//   key_secret: " loD9eyqImDkPp4Xfa5yg8ZYI ",
// });
