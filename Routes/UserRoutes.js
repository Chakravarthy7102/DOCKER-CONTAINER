const express = require("express");
const router = express.Router();

const authController = require("../Controller/authController");

router.route("/signup").post(authController.createUser);

module.exports = router;
