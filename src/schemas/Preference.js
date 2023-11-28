const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PreferenceSchema = new Schema({
  surveyID: {
    type: String,
    required: true,
  },
  surveyorEmail: {
    type: String,
    required: true,
  },
  participantsName: {
    type: String,
    required: true,
  },
  participantsEmail: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Number,
    required: true,
  },
});

const Preferences = model("preferences", PreferenceSchema);

module.exports = Preferences;
