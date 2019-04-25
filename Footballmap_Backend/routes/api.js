import { Router } from "express";
import mongoose from "mongoose";
var userFacade = require("../facade/UserFacade");
var router = Router();



router.get("/users", async function(req, res, next) {
  {
    res.json({ users: await userFacade.getAllUseres });
  }
});
