var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var userFacade = require("../facade/UserFacade");
var footballFacade = require("../facade/FootballFacade");

router.get("/users", async function(req, res, next) {
  {
    res.json({ users: await userFacade.getAllUsers() });
  }
});



router.get("/teams", async function(req, res, next) {
  {
    res.json({ teams: await footballFacade.getAll() });
  }
});

module.exports = router;
