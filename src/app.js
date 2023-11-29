const express = require("express");
const applyMiddleware = require("./middleWares/applyMiddlewares");
const connectDatabase = require("./database/connectDatabase");
require("dotenv").config();

const app = express();
const port = 5000 || process.env.PORT;

const authenticationRoutes = require("./routes/authentication/index");
const usersRoutes = require("./routes/users/index");
const surveyRoutes = require("./routes/surveys/index");
const responseRoutes = require("./routes/responses/index");
const preferenceRoutes = require("./routes/preferences/index");
const globalErrorHandler = require("./middleWares/globalErrorHandler");

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
