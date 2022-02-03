const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.ObjectId;

const Todo = mongoose.Schema({
  user: { type: ObjectId, ref: "User" },
  todos: [{ type: String }],
});

module.exports = mongoose.model("Todo", Todo);
