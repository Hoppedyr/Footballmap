var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var userFacade = require("../facade/UserFacade");

router.get("/users", async function(req, res, next) {
  {
    res.json({ users: await userFacade.getAllUsers() });
  }
});

module.exports = router;
