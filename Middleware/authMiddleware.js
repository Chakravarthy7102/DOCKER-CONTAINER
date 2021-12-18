const protect = (req, res, next) => {
  const { user } = req.session;

  if (!user) {
    return res.status(404).json({
      msg: "Your are not a user please login!",
    });
  }
  req.user = user;
  //the next function will handle the control to the right next middleware in the stack
  next();
};

module.exports = { protect };
