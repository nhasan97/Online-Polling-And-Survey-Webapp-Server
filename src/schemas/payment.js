const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  transactionID: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Number,
    required: true,
  },
});

const Payments = model("payments", PaymentSchema);

module.exports = Payments;
