const express = require("express");
const { saveUserDataInDB, getUserDataFromDB } = require("../../api/user");

const router = express.Router();

router.put("/users/:email", saveUserDataInDB);

router.get("/users", getUserDataFromDB);

module.exports = router;
