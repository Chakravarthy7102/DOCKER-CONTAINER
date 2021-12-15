const UserModel = require("../Model/userModel");

//controller for the user model auth

exports.createUser = async (req, res) => {
  try {
    const newuser = await UserModel.create(req.body);
    res.status(200).json({
      newuser,
      msg: "the new User is Created !",
    });
  } catch (error) {
    res.status(500).json({
      msg: "SomeHow the req has Failed",
    });
  }
};
