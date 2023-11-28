const saveSurveyDataInDB = require("./controllers/saveSurveyDataInDB");
const getSurveyDataFromDB = require("./controllers/getSurveyDataFromDB");
const getUserBasedSurveyFromDB = require("./controllers/getUserBasedSurveyFromDB");
const updateSurveyData = require("./controllers/updateSurveyData");

module.exports = {
  saveSurveyDataInDB,
  getSurveyDataFromDB,
  getUserBasedSurveyFromDB,
  updateSurveyData,
};
