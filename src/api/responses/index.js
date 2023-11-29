const saveResponseInDB = require("./controllers/postAPIs/saveResponseInDB");
const getResponsesFromDB = require("./controllers/getAPIs/getResponsesFromDB");
const getSingleSurveyResponsesFromDB = require("./controllers/getAPIs/getSingleSurveyResponsesFromDB");
const getTotalVotes = require("./controllers/getAPIs/getTotalVotes");

module.exports = {
  saveResponseInDB,
  getResponsesFromDB,
  getSingleSurveyResponsesFromDB,
  getTotalVotes,
};
