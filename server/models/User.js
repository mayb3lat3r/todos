const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;

const User = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: false },
  avatar: { type: String, required: false, unique: false, default: null },
  todos: [{ type: ObjectId, ref: "Todo", required: false }],
});

module.exports = mongoose.model("User", User);
