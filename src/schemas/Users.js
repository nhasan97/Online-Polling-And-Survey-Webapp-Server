const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "surveyor", "admin", "pro-user"],
  },

  timeStamp: {
    type: Number,
    required: true,
  },
});

const Users = model("users", UserSchema);

module.exports = Users;
