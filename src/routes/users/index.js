const express = require("express");
const {
  saveUserDataInDB,
  getUserDataFromDB,
  updateUserRoleInDB,
} = require("../../api/user");

const router = express.Router();

router.put("/users/:email", saveUserDataInDB);

router.get("/users", getUserDataFromDB);

router.put("/users/update-role/:email", updateUserRoleInDB);

module.exports = router;
