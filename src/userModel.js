const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    phone: String,
  },
  {
    versionKey: false,
  }
);

const User = model("users", userSchema);

module.exports = User;
