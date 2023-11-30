const Surveys = require("../../../../schemas/Surveys");

const updateSurveyStatus = async (req, res) => {
  try {
    const surveyId = req.params._id;
    const query = { _id: surveyId };
    const status = req.body;
    const option = { upsert: true };
    const updatedDoc = {
      $set: { ...status },
    };

    const result = await Surveys.updateOne(query, updatedDoc, option);
    return res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = updateSurveyStatus;
