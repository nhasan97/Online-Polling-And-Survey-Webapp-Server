const Responses = require("../../../../schemas/Responses");

const getTotalVotes = async (req, res) => {
  try {
    const aggregatorOpts = [
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

module.exports = getTotalVotes;
