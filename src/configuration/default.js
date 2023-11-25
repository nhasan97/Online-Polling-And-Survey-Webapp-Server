require("dotenv").config();

const configuration = {
  LOCAL_CLIENT: process.env.LOCAL_CLIENT_URL,
  PRODUCTION_CLIENT: process.env.PRODUCTION_CLIENT_URL,
};

module.exports = configuration;
