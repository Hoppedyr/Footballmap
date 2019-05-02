var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stadiumSchema = new Schema({
	fullName: String,
	Coordinates: String,
	capacity: Number,
	built: Number
});
var StadiumClub = mongoose.model('StadiumClub', stadiumSchema);

var FootballClubSchema = new Schema({
	fullClubName: String,
	Nicknames: String,
	logo: String,
	city: String,
	stadium: [ { type: Schema.Types.ObjectId, ref: 'StadiumClub' } ],
	founded: Number,
	league: String
});
var FootballClub = mongoose.model('FootballClub', FootballClubSchema);

var LeagueSchema = new Schema({
	name: String,
	country: String,
	teams: [ { type: Schema.Types.ObjectId, ref: 'FootballClub', default: null } ],
	cup: [ { type: Schema.Types.ObjectId, ref: 'Cup', default: null } ],
	year: Number
	//winner:[{ type: Schema.Types.ObjectId, ref: "FootballClub", default: null }] + year,
});
var League = mongoose.model('League', LeagueSchema);

var cupSchema = new Schema({
	name: String,
	teams: [ { type: Schema.Types.ObjectId, ref: 'FootballClub', default: null } ],
	founded: Number
});
var Cup = mongoose.model('Cup', cupSchema);

LeagueSchema.pre('save', function(next) {
	next();
});
// do on every update
LeagueSchema.pre('update', function(next) {
	next();
});

module.exports = {
	FootballClub,
	StadiumClub,
	League,
	Cup
};
