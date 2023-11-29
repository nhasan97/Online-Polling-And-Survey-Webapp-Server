const Surveys = require("../../../../schemas/Surveys");

const deleteSurveyFromDB = async (req, res) => {
  try {
    const surveyId = req.params._id;
    const filter = { _id: surveyId };
    const result = await Surveys.deleteOne(filter);
    return res.send(result);
  } catch (error) {
    return res.send({ error: true, message: error.message });
  }
};

module.exports = deleteSurveyFromDB;
