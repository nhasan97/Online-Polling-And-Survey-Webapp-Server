const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const SurveySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Surveys = model("surveys", SurveySchema);

module.exports = Surveys;
