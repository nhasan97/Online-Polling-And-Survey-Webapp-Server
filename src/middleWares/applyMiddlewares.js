const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { LOCAL_CLIENT, PRODUCTION_CLIENT } = require("../configuration/default");

const applyMiddleware = (app) => {
  app.use(
    cors({
      origin: [LOCAL_CLIENT, PRODUCTION_CLIENT],
      credentials: true,
    })
  );
  // app.use(cors());
  app.use(express.json());
  app.use(cookieParser());
};

module.exports = applyMiddleware;
