const UserModel = require("../Model/userModel");
const bcryptjs = require("bcryptjs");

//controller for the user model auth

exports.createUser = async (req, res) => {
  const { user, password } = req.body;

  try {
    const hashPassword = await bcryptjs.hash(password, 12);
    const newuser = await UserModel.create({
      user,
      password: hashPassword,
    });
    res.status(200).json({
      newuser,
      msg: "the new User is Created !",
    });
  } catch (error) {
    res.status(500).json({
      msg: "SomeHow the req has Failed",
      error,
    });
  }
};

exports.login = async (req, res) => {
  const { user, password } = req.body;

  try {
    const userInDatabase = await UserModel.findOne({ user });

    if (!userInDatabase) {
      return res.status(404).json({
        msg: "User not Found!",
      });
    }

    const isCorrect = await bcryptjs.compare(password, userInDatabase.password);

    if (isCorrect) {
      res.status(200).json({
        msg: "User has Logged In!",
      });
    } else {
      res.status(400).json({
        msg: "Check your password and the UserName",
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "SomeHow the req has Failed",
      error,
    });
  }
};
