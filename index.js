const express = require("express");
const applyMiddleware = require("./src/middleWares/applyMiddlewares");
const connectDatabase = require("./src/database/connectDatabase");
require("dotenv").config();

const app = express();
const port = 5000 || process.env.PORT;

const authenticationRoutes = require("./src/routes/authentication/index");
const usersRoutes = require("./src/routes/users/index");
const surveyRoutes = require("./src/routes/surveys/index");
const responseRoutes = require("./src/routes/responses/index");
const preferenceRoutes = require("./src/routes/preferences/index");
const globalErrorHandler = require("./src/middleWares/globalErrorHandler");

applyMiddleware(app);

app.use(authenticationRoutes);
app.use(usersRoutes);
app.use(surveyRoutes);
app.use(responseRoutes);
app.use(preferenceRoutes);

app.get("/", (req, res) => {
  res.send("server started");
});

app.all("*", (req, res, next) => {
  const err = new Error(`requested url [${req.url}] is invalid`);
  err.status = 404;
  next(err);
});

app.use(globalErrorHandler);

const main = async () => {
  await connectDatabase();
  app.listen(port, () => {
    console.log(`server is running at port ${port}`);
  });
};

main();
