const mongooose = require("mongoose");

const UserModel = new mongooose.Schema({
  user: {
    type: String,
    require: [true, "You must Specify a User Name Nigga"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "require to enter a strong password"],
  },
});

module.exports = mongooose.model("UserModel", UserModel);
