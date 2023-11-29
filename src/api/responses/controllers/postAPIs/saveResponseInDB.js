const Responses = require("../../../../schemas/Responses");

const saveResponseInDB = async (req, res) => {
  try {
    const response = req.body;
    const result = await Responses.create(response);
    return res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = saveResponseInDB;
