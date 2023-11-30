const Payments = require("../../../../schemas/payment");

const getPaymentDataFromDb = async (req, res) => {
  try {
    const result = await Payments.find();
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getPaymentDataFromDb;
