const mongoose = require('mongoose');
var connect = require('../dbConnect.js');
connect(require('../settings').DEV_DB_URI);
var Football = require('../facade/FootballFacade'); // Virker ikke, men kan godt ordnes XD
var { Cup, FootballClub, League, StadiumClub } = require('../models/Football');
// var League = require('../models/test'); This is the same as above

async function makeData2() {
	console.log('Making shit');
	try {
		/* ***************************
    IKK LAV TINGENE PÅ DNE MÅDE  
    **************************** */

		// var l = new League({
		// 	name: 'PremierLeague',
		// 	country: 'England',
		// 	founded: 1992,
		// 	teams: {
		// 		fullClubName: 'Arsenal',
		// 		Nicknames: 'TheGunners',
		// 		logo: 'String',
		// 		city: 'London',
		// 		founded: 1886,
		// 		Stadium: {
		// 			fullName: 'EmiratesStadium',
		// 			Coordinates: 'etste',
		// 			capacity: 60.355,
		// 			built: 2016
		// 		}
		// 	}
		// });

		/* ***************************
    DEN RIGTIGE MÅDE AT GØRE TINGENE PÅ 
    ****************************** */

		var s = new StadiumClub({
			fullName: 'EmiratesStadium',
			Coordinates: 'etste',
			capacity: 60.355,
			built: 2016
		});
		var f = new FootballClub({
			fullClubName: 'Arsenal',
			Nicknames: 'TheGunners',
			logo: 'String',
			city: 'London',
			founded: 1886,
			Stadium: s
		});
		var l = new League({
			name: 'PremierLeague',
			country: 'England',
			founded: 1992,
			teams: f
		});

		await l.save();
		// Det her virker ikke hellere ikke.  ****** list = await Football.find(); *******
		list = await League.find({});
		console.log(`Number of users ${list.length}, SAVED`);
		console.log(list);
		console.log('\n-------------------------------------------\n');
		mongoose.disconnect(); // Det her er fra mig <3 :D
	} catch (err) {
		console.log(err);
	}
}

makeData2();
