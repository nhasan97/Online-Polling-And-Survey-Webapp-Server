const Surveys = require("../../../../schemas/Surveys");

const saveSurveyDataInDB = async (req, res) => {
  try {
    const survey = { ...req.body, timeStamp: Date.now() };
    const result = await Surveys.create(survey);
    return res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = saveSurveyDataInDB;
