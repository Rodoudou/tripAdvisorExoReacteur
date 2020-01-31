const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: String,
  email: { type: String, unique: true },
  token: String,
  hash: String,
  salt: String,
  password: String
});

module.exports = User;
