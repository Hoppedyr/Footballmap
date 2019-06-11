var express = require("express");
var router = express.Router();
var debug = require("debug")("FOOTBALL_BACKEND:route-index");

/* GET home page. */
router.get("/", function(req, res, next) {
  debug("index");
  res.render("index", { title: "Express" });
});

module.exports = router;
