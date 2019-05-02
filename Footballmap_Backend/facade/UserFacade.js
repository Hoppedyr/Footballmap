var mongoose = require('mongoose');
var User = require('../models/User');

function getAllUsers() {
	return User.find({}).exec();
}

// async function addUser(firstName, lastName, userName, password, email) {
//   var user = new User({
//     firstName: firstName,
//     lastName: lastName,
//     userName: userName,
//     password: password,
//     email: email
//   });

//   await user.save();
//   return user;
// }

module.exports = {
	getAllUsers
	//addUser
};
