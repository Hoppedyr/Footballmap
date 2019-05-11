import mongoose from "mongoose";
var User = require("../models/user");

// resolver map
export const resolvers = {
  Query: {
    getOneUser: (root, { id }) => User.findByID(id).exec(),
    getAllUsers: () => User.find({}).exec()
  },
  Mutation: {
    createUser: (root, { input }) => new User({ ...input }).save(),
    updateUser: (root, { input }) => User.findAndUpdate({ _id: input.id }),
    deleteUser: (root, { id }) => User.deleteUser({ _id: id })
  }
};
