const express = require("express");

const {
  savePreferenceInDB,
  getSingleSurveyPreference,
} = require("../../api/preferences");

const router = express.Router();

router.post("/survey-preferences", savePreferenceInDB);

router.get("/survey-preferences/:_id", getSingleSurveyPreference);

module.exports = router;
