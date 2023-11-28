const express = require("express");
const {
  saveSurveyDataInDB,
  getSurveyDataFromDB,
  getUserBasedSurveyFromDB,
  updateSurveyData,
} = require("../../api/survey");
const verifyToken = require("../../middleWares/verifyToken");

const router = express.Router();

router.post("/surveys", saveSurveyDataInDB);

router.get("/surveys", getSurveyDataFromDB);

router.get("/user-surveys", verifyToken, getUserBasedSurveyFromDB);

router.patch("/surveys/:_id", updateSurveyData);

module.exports = router;
