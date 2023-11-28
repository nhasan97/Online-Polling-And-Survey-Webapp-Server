const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ResponseSchema = new Schema({
  surveyID: {
    type: String,
    required: true,
  },
  surveyorEmail: {
    type: String,
    required: true,
  },
  votersName: {
    type: String,
    required: true,
  },
  votersEmail: {
    type: String,
    required: true,
  },
  vote: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Number,
    required: true,
  },
});

const Responses = model("responses", ResponseSchema);

module.exports = Responses;
