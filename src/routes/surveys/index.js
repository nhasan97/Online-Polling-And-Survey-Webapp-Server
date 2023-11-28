const express = require("express");
const {
  saveSurveyDataInDB,
  getSurveyDataFromDB,
  getUserBasedSurveyFromDB,
  updateSurveyData,
  getParticularSurveyData,
  saveResponseInDB,
  getResponsesFromDB,
  getSingleSurveyResponsesFromDB,
  savePreferenceInDB,
  getSingleSurveyPreference,
} = require("../../api/survey");

const verifyToken = require("../../middleWares/verifyToken");

const router = express.Router();

router.post("/surveys", saveSurveyDataInDB);

router.get("/surveys", getSurveyDataFromDB);

router.get("/user-surveys", verifyToken, getUserBasedSurveyFromDB);

router.patch("/surveys/:_id", updateSurveyData);

router.get("/surveys/:_id", getParticularSurveyData);

router.post("/survey-responses", saveResponseInDB);

router.get("/survey-responses", getResponsesFromDB);

router.get("/survey-responses/:_id", getSingleSurveyResponsesFromDB);

router.post("/survey-preferences", savePreferenceInDB);

router.get("/survey-preferences/:_id", getSingleSurveyPreference);

module.exports = router;