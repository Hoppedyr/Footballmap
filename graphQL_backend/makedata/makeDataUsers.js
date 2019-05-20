var connect = require("../dbConnect.js");
connect(require("../settings").DEV_DB_URI);
var User = require("../models/user");

async function makeData() {
  console.log("Making users");
  try {
    //This will activate the "save" midleware
    var u = new User({
      firstName: "Kurt",
      lastName: "Wonnegut",
      userName: "ckw",
      password: "c",
      email: "kw@c.dk"
    });
    await u.save();

    var u2 = new User({
      firstName: "Jane",
      lastName: "Wonnegut",
      userName: "cjw",
      password: "c",
      email: "jw@c.dk"
    });

    await u2.save();
    var u3 = new User({
      firstName: "Bo",
      lastName: "Wonnegut",
      userName: "cbw",
      password: "c",
      email: "bw@c.dk"
    });

    await u3.save();

    console.log("\n-------------------------------------------\n");
  } catch (err) {
    console.log(err);
  }
}

makeData();
