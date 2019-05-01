var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var stadiumSchema = new Schema({
  fullName: String,
  Coordinates: String,
  capacity: Number,
  built: Number
});

var FootballClubSchema = new Schema({
  fullClubName: String,
  Nicknames: String,
  logo: String,
  city: String,
  stadium: [stadiumSchema],
  founded: Number
});

var LeagueSchema = new Schema({
  name: String,
  country: String,
  teams: [FootballClubSchema],
  year: Number
});

LeagueSchema.pre("save", function(next) {
  next();
});
// do on every update
LeagueSchema.pre("update", function(next) {
  next();
});

var League = mongoose.model("League", LeagueSchema);

module.exports = {
  League
};
