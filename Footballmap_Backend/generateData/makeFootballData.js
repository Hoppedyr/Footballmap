const mongoose = require("mongoose");
var connect = require("../dbConnect.js");
connect(require("../settings").DEV_DB_URI);
var Football = require("../facade/FootballFacade"); // Virker ikke, men kan godt ordnes XD
var { Cup, FootballClub, League, StadiumClub } = require("../models/Football");

async function makeData2() {
  console.log("Making shit");
  try {
    var l = new League({
      name: "PremierLeague",
      country: "England",
      founded: 1992,
      teams: [
        Arsenal,
        Huddersfield,
        Fullham,
        Cardiff,
        BrightonHove,
        Southampton,
        Burnley,
        NewcastleUnited,
        Bournemouth,
        CrystalPalace,
        WestHamUnited,
        Watford,
        LeicesterCity,
        Wolverhampton,
        Tottenham,
        Chelsea,
        ManchesterUnited,
        ManchesterCity,
        Liverpool
      ]
    });

    var Arsenal = new FootballClub({
      fullClubName: "Arsenal",
      Nicknames: "The Gunners",
      logo: "String",
      city: "London",
      founded: 1886,
      stadium: Emirates
    });

    var Emirates = new StadiumClub({
      fullName: "Emirates Stadium",
      Coordinates: "etste",
      capacity: 60.355,
      built: 2016
    });

    var Huddersfield = new FootballClub({
      fullClubName: "Huddersfield",
      Nicknames: "The Terries",
      logo: "String",
      city: " Huddersfield",
      founded: 1908,
      stadium: JohnSmithStadium
    });

    var JohnSmithStadium = new StadiumClub({
      fullName: "	John Smith's Stadium",
      Coordinates: "dfgdf",
      capacity: 24.5,
      built: 1994
    });

    var Fullham = new FootballClub({
      fullClubName: "Fullham Football Club",
      Nicknames: "The Cottagers",
      logo: "String",
      city: " London",
      founded: 1879,
      stadium: CravenCottage
    });

    var CravenCottage = new StadiumClub({
      fullName: "	Craven Cottage",
      Coordinates: "dfgdf",
      capacity: 25.7,
      built: 1896
    });

    var Cardiff = new FootballClub({
      fullClubName: "	Cardiff City Football Club",
      Nicknames: "The Bluebirds",
      logo: "String",
      city: " Cardiff",
      founded: 1899,
      stadium: CardiffCityStadium
    });

    var CardiffCityStadium = new StadiumClub({
      fullName: "Cardiff City Stadium",
      Coordinates: "dfgdf",
      capacity: 26.828,
      built: 1896
    });

    var BrightonHove = new FootballClub({
      fullClubName: "	Brighton & Hove Albion FC",
      Nicknames: "The Seagulls",
      logo: "String",
      city: " Brighton & Hove",
      founded: 1901,
      stadium: FalmerStadium
    });

    var FalmerStadium = new StadiumClub({
      fullName: "Falmer Stadium",
      Coordinates: "dfgdf",
      capacity: 30.75,
      built: 1896
    });

    var Southampton = new FootballClub({
      fullClubName: "	Southampton Football Club",
      Nicknames: "	Saints",
      logo: "String",
      city: "Southampton ",
      founded: 1885,
      stadium: FalmerStadium
    });

    var FalmerStadium = new StadiumClub({
      fullName: "St. Mary's Stadium",
      Coordinates: "dfgdf",
      capacity: 32.689,
      built: 2001
    });

    var Burnley = new FootballClub({
      fullClubName: "	Burnley Football Club",
      Nicknames: "The Clarets",
      logo: "String",
      city: "Burnley  ",
      founded: 1882,
      stadium: TurfMoor
    });

    var TurfMoor = new StadiumClub({
      fullName: "Turf Moor",
      Coordinates: "dfgdf",
      capacity: 21.8,
      built: 1883
    });

    var NewcastleUnited = new FootballClub({
      fullClubName: "Newcastle United F.C.",
      Nicknames: "	The Magpies",
      logo: "String",
      city: "Newcastle  ",
      founded: 1892,
      stadium: StJamesPark
    });

    var StJamesPark = new StadiumClub({
      fullName: "St James' Park",
      Coordinates: "dfgdf",
      capacity: 52.387,
      built: 2000
    });

    var Bournemouth = new FootballClub({
      fullClubName: "	Athletic Football Club Bournemouth",
      Nicknames: "	The Cherries ",
      logo: "String",
      city: "Bournemouth  ",
      founded: 1899,
      stadium: DeanCourt
    });

    var DeanCourt = new StadiumClub({
      fullName: "Dean Court ",
      Coordinates: "dfgdf",
      capacity: 12000,
      built: 2000
    });

    var CrystalPalace = new FootballClub({
      fullClubName: "	Crystal Palace Football Club",
      Nicknames: "	The Eagles ",
      logo: "String",
      city: "London  ",
      founded: 1905,
      stadium: SelhurstPark
    });

    var SelhurstPark = new StadiumClub({
      fullName: "Selhurst Park ",
      Coordinates: "dfgdf",
      capacity: 26.309,
      built: 1924
    });

    var WestHamUnited = new FootballClub({
      fullClubName: "	West Ham United Football Club",
      Nicknames: "	The Hammers",
      logo: "String",
      city: "London  ",
      founded: 1905,
      stadium: LondonStadium
    });

    var LondonStadium = new StadiumClub({
      fullName: "London Stadium ",
      Coordinates: "dfgdf",
      capacity: 60.0,
      built: 2007
    });

    var Watford = new FootballClub({
      fullClubName: "	Watford Football Club",
      Nicknames: "	The Hornets",
      logo: "String",
      city: "Watford  ",
      founded: 1881,
      stadium: VicarageRoad
    });

    var VicarageRoad = new StadiumClub({
      fullName: "Vicarage Road ",
      Coordinates: "dfgdf",
      capacity: 19.92,
      built: 1922
    });
    var LeicesterCity = new FootballClub({
      fullClubName: "		Leicester City Football Club",
      Nicknames: "	The Foxes",
      logo: "String",
      city: "Leicester  ",
      founded: 1884,
      stadium: KingPowerStadium
    });

    var KingPowerStadium = new StadiumClub({
      fullName: "	King Power Stadium ",
      Coordinates: "dfgdf",
      capacity: 32.262,
      built: 2002
    });

    var LeicesterCity = new FootballClub({
      fullClubName: "		Everton Football Club",
      Nicknames: "	The Toffees",
      logo: "String",
      city: "Liverpool ",
      founded: 1878,
      stadium: GoodisonPark
    });

    var GoodisonPark = new StadiumClub({
      fullName: "		Goodison Park ",
      Coordinates: "dfgdf",
      capacity: 40.569,
      built: 1892
    });
    var Wolverhampton = new FootballClub({
      fullClubName: "		Wolverhampton Wanderers Football Club",
      Nicknames: "	Wolves",
      logo: "String",
      city: " Wolverhampton ",
      founded: 1877,
      stadium: MolineuxStadium
    });

    var MolineuxStadium = new StadiumClub({
      fullName: "		Molineux Stadium",
      Coordinates: "dfgdf",
      capacity: 31.7,
      built: 1889
    });
    var ManchesterUnited = new FootballClub({
      fullClubName: "	Manchester United Football Club",
      Nicknames: "The Red Devils",
      logo: "String",
      city: " Manchester",
      founded: 1878,
      stadium: OldTrafford
    });

    var OldTrafford = new StadiumClub({
      fullName: "			Old Trafford",
      Coordinates: "dfgdf",
      capacity: 75.957,
      built: 1909
    });

    var Tottenham = new FootballClub({
      fullClubName: "	Tottenham Hotspur Football Club",
      Nicknames: "Spurs",
      logo: "String",
      city: " London",
      founded: 1882,
      stadium: TottenhamHotspurStadium
    });

    var TottenhamHotspurStadium = new StadiumClub({
      fullName: "	Tottenham Hotspur Stadium",
      Coordinates: "dfgdf",
      capacity: 63.0,
      built: 2019
    });
    var Chelsea = new FootballClub({
      fullClubName: "	Chelsea Football Club",
      Nicknames: "	The Blues",
      logo: "String",
      city: " London",
      founded: 1905,
      stadium: StamfordBridge
    });

    var StamfordBridge = new StadiumClub({
      fullName: "	Stamford Bridge",
      Coordinates: "dfgdf",
      capacity: 40.853,
      built: 1876
    });
    var Liverpool = new FootballClub({
      fullClubName: "	Liverpool Football Club",
      Nicknames: "	The Reds",
      logo: "String",
      city: " Liverpool",
      founded: 1892,
      stadium: Anfield
    });

    var Anfield = new StadiumClub({
      fullName: "		Anfield",
      Coordinates: "dfgdf",
      capacity: 54.167,
      built: 1884
    });

    var ManchesterCity = new FootballClub({
      fullClubName: "	 Manchester City Football Club",
      Nicknames: "		The Citizens",
      logo: "String",
      city: " Manchester ",
      founded: 1894,
      stadium: EthihadStadium
    });

    var EthihadStadium = new StadiumClub({
      fullName: "		Ethihad Stadium",
      Coordinates: "dfgdf",
      capacity: 55.097,
      built: 2003
    });

    //await League.deleteMany({});
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
