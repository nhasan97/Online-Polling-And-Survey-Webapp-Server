const saveSurveyDataInDB = require("./controllers/saveSurveyDataInDB");
const getSurveyDataFromDB = require("./controllers/getSurveyDataFromDB");
const getUserBasedSurveyFromDB = require("./controllers/getUserBasedSurveyFromDB");
const updateSurveyData = require("./controllers/updateSurveyData");
const getParticularSurveyData = require("./controllers/getParticularSurveyData");
const saveResponseInDB = require("./controllers/saveResponseInDB");
const getResponsesFromDB = require("./controllers/getResponsesFromDB");
const getSingleSurveyResponsesFromDB = require("./controllers/getSingleSurveyResponsesFromDB");

module.exports = {
  saveSurveyDataInDB,
  getSurveyDataFromDB,
  getUserBasedSurveyFromDB,
  updateSurveyData,
  getParticularSurveyData,
  saveResponseInDB,
  getResponsesFromDB,
  getSingleSurveyResponsesFromDB,
};
