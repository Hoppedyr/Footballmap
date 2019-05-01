var connect = require("../dbConnect.js");
connect(require("../settings").DEV_DB_URI);
var Football = require("../facade/FootballFacade");
var Data = require("../models/test");

async function makeData2() {
  console.log("Making shit");
  try {
    var l = new Data({
      name: "PremierLeague",
      country: "England",
      founded: 1992,
      teams: {
        fullClubName: "Arsenal",
        Nicknames: "TheGunners",
        logo: "String",
        city: "London",
        founded: 1886,
        Stadium: {
          fullName: "EmiratesStadium",
          Coordinates: "etste",
          capacity: 60.355,
          built: 2016
        }
      }
    });
    await l.save();
    list = await Football.getAll();
    console.log(`Number of users ${list.length}, SAVED`);
    console.log(list);
    console.log("\n-------------------------------------------\n");
  } catch (err) {
    console.log(err);
  }
}

makeData2();
