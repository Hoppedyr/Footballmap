var bcrypt = require("bcrypt");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstname: String,
  lastName: String,
  userName: { type: String, unique: true, required: true },
  password: String,
  email: { type: String, required: true }
});

//Do on every save
UserSchema.pre("save", async function(next) {
  var password = this.password;
  var saltRounds = 10;

  this.password = await new Promise(function(res, rej) {
    bcrypt.hash(password, saltRounds, function(err, value) {
      if (err) console.log(err);
      res(value);
    });
  });
  next();
});

// Validate password
UserSchema.on("validate", async function(password, next) {
  console.log(this);
});

// do on every update
UserSchema.pre("update", function(next) {
  // do something
  next();
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
