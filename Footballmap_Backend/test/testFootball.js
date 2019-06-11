const mongoose = require("mongoose");
const expect = require("chai").expect;
var connect = require("../dbConnect.js");
var assert = require("assert");
//See (for the three lines below): https://github.com/Automattic/mongoose/issues/1251
// mongoose.models = {};
// mongoose.modelSchemas = {};
// mongoose.connection = {};

var userFacade = require("../facade/UserFacade");
var footballFacade = require("../facade/FootballFacade");

describe("Testing the User Facade", function() {
  /* Connect to the TEST-DATABASE */
  before(async function() {
    //this.timeout(require("../settings").MOCHA_TEST_TIMEOUT);
    await connect(require("../settings").DEV_DB_URI);
  });

  after(async function() {
    await mongoose.disconnect();
  });

  it("Should find all users (Kurt,Jane,bo)", async function() {
    var users = await userFacade.getAllUsers();
    assert.equal(users.length, 3);
    // expect(users.length).to.be.equal(3);
  });

  it("should return all football teams", async function() {
    var teams = await footballFacade.getAll();
    assert.equal(teams.length, 1);
    // expect(teams.length).to.be.equal(1);
  });
});
