const express = require("express");
const { saveUserDataInDB } = require("../../api/user");

const router = express.Router();

router.put("/users/:email", saveUserDataInDB);

module.exports = router;
