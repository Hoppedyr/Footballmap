var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var stadiumSchema = new Schema({
  fullName: String,
  Coordinates: String,
  capacity: Number,
  built: Number
});
var StadiumClub = mongoose.model("StadiumClubs", stadiumSchema);

var FootballClubSchema = new Schema({
  fullClubName: String,
  Nicknames: String,
  logo: String,
  city: String,
  founded: Number,
  league: String,
  stadium: stadiumSchema
});
var FootballClub = mongoose.model("FootballClub", FootballClubSchema);

var LeagueSchema = new Schema({
  name: String,
  country: String,
  //teams: [{ type: Schema.Types.ObjectId, ref: "FootballClub", default: null }],
  teams: [FootballClubSchema],
  cup: [{ type: Schema.Types.ObjectId, ref: "Cup", default: null }],
  founded: Number
  //winner:[{ type: Schema.Types.ObjectId, ref: "FootballClub", default: null }] + year,
});
var League = mongoose.model("League", LeagueSchema);

var cupSchema = new Schema({
  name: String,
  teams: [{ type: Schema.Types.ObjectId, ref: "FootballClub", default: null }],
  founded: Number
});
var Cup = mongoose.model("Cup", cupSchema);

LeagueSchema.pre("save", function(next) {
  next();
});
// do on every update
LeagueSchema.pre("update", function(next) {
  next();
});

module.exports = {
  FootballClub,
  StadiumClub,
  League,
  Cup
};
