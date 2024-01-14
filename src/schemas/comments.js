const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CommentSchema = new Schema({
  surveyID: {
    type: String,
    required: true,
  },
  surveyorEmail: {
    type: String,
    required: true,
  },
  commenterName: {
    type: String,
    required: true,
  },
  commenterEmail: {
    type: String,
    required: true,
  },
  commenterImage: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Number,
    required: true,
  },
});

const Comments = model("comments", CommentSchema);

module.exports = Comments;
