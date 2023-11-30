const Payments = require("../../../../schemas/payment");

const savePaymentDataInDB = async (req, res) => {
  try {
    const payment = { ...req.body, timeStamp: Date.now() };
    console.log(payment);
    const result = await Payments.create(payment);
    return res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = savePaymentDataInDB;
