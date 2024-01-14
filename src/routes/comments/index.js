const express = require("express");

const {
  saveCommentInDB,
  getSIngleSurveyComments,
} = require("../../api/comments");

const router = express.Router();

router.post("/survey-comments", saveCommentInDB);
router.get("/survey-comments/:_id", getSIngleSurveyComments);

module.exports = router;
