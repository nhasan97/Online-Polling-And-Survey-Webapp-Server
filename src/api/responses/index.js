const saveResponseInDB = require("./controllers/postAPIs/saveResponseInDB");
const getResponsesFromDB = require("./controllers/getAPIs/getResponsesFromDB");
const getSingleSurveyResponsesFromDB = require("./controllers/getAPIs/getSingleSurveyResponsesFromDB");
const getTotalVotes = require("./controllers/getAPIs/getTotalVotes");
const getSingleSurveyVote = require("./controllers/getAPIs/getSingleSurveyVote");

module.exports = {
  saveResponseInDB,
  getResponsesFromDB,
  getSingleSurveyResponsesFromDB,
  getTotalVotes,
  getSingleSurveyVote,
};
