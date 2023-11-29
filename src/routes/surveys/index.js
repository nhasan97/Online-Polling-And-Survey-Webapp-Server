const express = require("express");
const {
  saveSurveyDataInDB,
  getSurveyDataFromDB,
  getUserBasedSurveyFromDB,
  updateSurveyData,
  getParticularSurveyData,
  deleteSurveyFromDB,
} = require("../../api/survey");

const verifyToken = require("../../middleWares/verifyToken");

const router = express.Router();

router.post("/surveys", saveSurveyDataInDB);

router.get("/surveys", getSurveyDataFromDB);

router.get("/user-surveys", verifyToken, getUserBasedSurveyFromDB);

router.patch("/surveys/:_id", updateSurveyData);

router.get("/surveys/:_id", getParticularSurveyData);

router.delete("/surveys/:_id", deleteSurveyFromDB);

module.exports = router;
