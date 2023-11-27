const express = require("express");
const { saveSurveyDataInDB, getSurveyDataFromDB } = require("../../api/survey");

const router = express.Router();

router.post("/surveys", saveSurveyDataInDB);

router.get("/surveys", getSurveyDataFromDB);

module.exports = router;
