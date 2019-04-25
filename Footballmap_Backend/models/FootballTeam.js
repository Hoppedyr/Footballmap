var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var stadiumSchema = new Schema({
  fullName: String,
  Coordinates: String,
  capacity: Int32Array,
  built: Int32Array
});

var FootballClubSchema = new Schema({
  fullClubName: String,
  ShortName: String,
  logo: String,
  city: String,
  stadium: [stadiumSchema],
  Founded: Int32Array,
  League: String
});
