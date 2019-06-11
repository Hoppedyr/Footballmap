var createError = require("http-errors");
var express = require("express");
var path = require("path");
var connect = require("./dbConnect");

var debug = require("debug")("FOOTBALL_BACKEND:app");
var appLogger = require("./logger-setup");

connect(require("./settings").DEV_DB_URI);

var indexRouter = require("./routes/index");

var apiRouter = require("./routes/api");

var app = express();

// view engine setup

const name = "my-app";
debug("booting %s", name);
appLogger.log("info", "127.0.0.1 - there's no place like home", debug("teret"));

// appLogger.log("error", "127.0.0.1 - there's no place like home");
// appLogger.log("warn", "127.0.0.1 - there's no place like home");

// appLogger.log("verbose", "127.0.0.1 - there's no place like home");
// appLogger.log("debug", "127.0.0.1 - there's no place like home");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.set("json spaces", 1);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
