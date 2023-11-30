const Responses = require("../../../../schemas/Responses");

const getSingleSurveyVote = async (req, res) => {
  try {
    const _id = req.params._id;
    let query = { surveyID: _id };

    const aggregatorOpts = [
      { $match: { surveyID: _id } },
      {
        $group: {
          _id: {
            surveyID: "$surveyID",
            vote: "$vote",
          },
          count: {
            $sum: 1,
          },
        },
      },
      {
        $group: {
          _id: "$_id.surveyID",
          vote_group: {
            $push: {
              vote: "$_id.vote",
              count: "$count",
            },
          },
        },
      },
    ];

    const result = await Responses.aggregate(aggregatorOpts).exec();
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getSingleSurveyVote;
