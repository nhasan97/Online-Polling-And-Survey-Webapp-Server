const Surveys = require("../../../../schemas/Surveys");

const getParticularSurveyData = async (req, res) => {
  try {
    const _id = req.params._id;
    let query = { _id: _id };
    const result = await Surveys.findOne(query);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getParticularSurveyData;
