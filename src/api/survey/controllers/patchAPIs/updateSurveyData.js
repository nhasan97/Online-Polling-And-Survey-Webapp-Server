const Surveys = require("../../../../schemas/Surveys");

const updateSurveyData = async (req, res) => {
  try {
    const surveyId = req.params._id;
    const filter = { _id: surveyId };

    const options = { upsert: true };

    const updatedInfo = {
      $set: {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        deadline: req.body.deadline,
      },
    };

    const result = await Surveys.updateOne(filter, updatedInfo, options);
    return res.send(result);
  } catch (error) {
    return res.send({ error: true, message: error.message });
  }
};

module.exports = updateSurveyData;
