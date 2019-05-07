var mongoose = require("mongoose");
var Football = require("../models/Football");

function getAll() {
  return Football.find({}).exec();
}

async function addAll(
  name,
  country,
  teams,
  year,
  fullClubName,
  NickNames,
  logo,
  city,
  stadium,
  FullName,
  Coordinates,
  Capacity,
  built
) {
  var League = new League({
    name: name,
    country: country,
    year: year,
    teams: teams({
      fullClubName: fullClubName,
      NickNames: NickNames,
      logo: logo,
      city: city,
      stadium: stadium({
        FullName: FullName,
        Coordinates: Coordinates,
        Capacity: Capacity,
        built
      })
    })
  });
  await League.save();
  return League;
}

module.exports = {
  getAll,
  addAll
};
