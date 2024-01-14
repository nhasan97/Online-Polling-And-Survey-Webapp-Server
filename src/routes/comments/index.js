const express = require("express");

const { saveCommentInDB } = require("../../api/comments");

const router = express.Router();

router.post("/survey-comments", saveCommentInDB);

// router.get("/survey-preferences/:_id", getSingleSurveyPreference);

module.exports = router;
