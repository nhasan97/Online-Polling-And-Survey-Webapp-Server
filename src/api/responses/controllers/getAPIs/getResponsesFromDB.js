const Responses = require("../../../../schemas/Responses");

const getResponsesFromDB = async (req, res) => {
  try {
    const result = await Responses.find();
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getResponsesFromDB;
