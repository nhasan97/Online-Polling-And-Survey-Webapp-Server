const express = require("express");

const {
  saveResponseInDB,
  getResponsesFromDB,
  getSingleSurveyResponsesFromDB,
  getTotalVotes,
  getSingleSurveyVote,
} = require("../../api/responses");

const router = express.Router();

router.post("/survey-responses", saveResponseInDB);

router.get("/survey-responses", getResponsesFromDB);

router.get("/survey-responses/:_id", getSingleSurveyResponsesFromDB);

router.get("/total-votes", getTotalVotes);

router.get("/total-votes/:_id", getSingleSurveyVote);

module.exports = router;
