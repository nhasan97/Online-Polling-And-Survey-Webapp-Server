const express = require("express");
const {
  saveSurveyDataInDB,
  getSurveyDataFromDB,
  getUserBasedSurveyFromDB,
  updateSurveyData,
  getParticularSurveyData,
  deleteSurveyFromDB,
  updateSurveyStatus,
} = require("../../api/survey");

const verifyToken = require("../../middleWares/verifyToken");

const router = express.Router();

router.post("/surveys", saveSurveyDataInDB);

router.get("/surveys", getSurveyDataFromDB);

router.get("/user-surveys", verifyToken, getUserBasedSurveyFromDB);

router.patch("/surveys/:_id", verifyToken, updateSurveyData);

router.get("/surveys/:_id", getParticularSurveyData);

router.delete("/surveys/:_id", verifyToken, deleteSurveyFromDB);

router.patch("/surveys/update-status/:_id", verifyToken, updateSurveyStatus);

module.exports = router;
