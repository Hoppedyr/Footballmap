const mongoose = require("mongoose");
var connect = require("../dbConnect.js");
connect(require("../settings").DEV_DB_URI);
var Football = require("../facade/FootballFacade"); // Virker ikke, men kan godt ordnes XD
var { Cup, FootballClub, League, StadiumClub } = require("../models/Football");

async function makeData2() {
  console.log("Making shit");
  try {
    var s = new StadiumClub({
      fullName: "Emirates Stadium",
      Coordinates: "etste",
      capacity: 60.355,
      built: 2016
    });
    var s2 = new StadiumClub({
      fullName: "dfgdg Stadium",
      Coordinates: "dfgdf",
      capacity: 60.65455,
      built: 2016
    });

    var Arsenal = new FootballClub({
      fullClubName: "Arsenal",
      Nicknames: "The Gunners",
      logo: "String",
      city: "London",
      founded: 1886,
      stadium: s
    });
    var f2 = new FootballClub({
      fullClubName: "yryd",
      Nicknames: "TheGufghfhers",
      logo: "String",
      city: "London",
      founded: 1886,
      stadium: s2
    });

    var l = new League({
      name: "PremierLeague",
      country: "England",
      founded: 1992,
      teams: [Arsenal, f2]
    });

    await League.deleteMany({});
    await l.save();

    list = await League.find({});
    console.log(`Number of users ${list.length}, SAVED`);
    console.log(list);
    console.log("\n-------------------------------------------\n");
    mongoose.disconnect(); // Det her er fra mig <3 :D
  } catch (err) {
    console.log(err);
  }
}

makeData2();
