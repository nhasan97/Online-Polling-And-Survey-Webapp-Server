const saveSurveyDataInDB = require("./controllers/postAPIs/saveSurveyDataInDB");
const getSurveyDataFromDB = require("./controllers/getAPIs/getSurveyDataFromDB");
const getUserBasedSurveyFromDB = require("./controllers/getAPIs/getUserBasedSurveyFromDB");
const updateSurveyData = require("./controllers/patchAPIs/updateSurveyData");
const getParticularSurveyData = require("./controllers/getAPIs/getParticularSurveyData");

module.exports = {
  saveSurveyDataInDB,
  getSurveyDataFromDB,
  getUserBasedSurveyFromDB,
  updateSurveyData,
  getParticularSurveyData,
};
