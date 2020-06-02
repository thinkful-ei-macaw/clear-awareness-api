require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const errorHandler = require("./middleware/error-handler");
const { NODE_ENV } = require("./config");
const authRouter = require("./auth/auth-router");
const userRouter = require("./user/user-router");
const quotesRouter = require("./quotes/quotes-router");
const journalRouter = require("./journal/journal-router");

const app = express();

app.use(
  morgan(NODE_ENV === "production" ? "tiny" : "common", {
    skip: () => NODE_ENV === "test",
  })
);
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});
// app.use("/api/auth", authRouter);
// app.use("/api/user", userRouter);
app.use("/api/quotes", quotesRouter);
app.use("/api/journal", journalRouter);

app.use(errorHandler);

module.exports = app;
