const Surveys = require("../../../schemas/Surveys");

const getSurveyDataFromDB = async (req, res) => {
  try {
    const result = await Surveys.find();
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getSurveyDataFromDB;
