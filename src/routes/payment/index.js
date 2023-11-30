const express = require("express");
const { PaymentIntent, savePaymentDataInDB } = require("../../api/payment");
const verifyToken = require("../../middleWares/verifyToken");

const router = express.Router();

router.post("/create-payment-intent", PaymentIntent);

router.post("/payments", verifyToken, savePaymentDataInDB);

module.exports = router;
