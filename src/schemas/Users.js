const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  role: {
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
});

const Users = model("users", UserSchema);

module.exports = Users;
