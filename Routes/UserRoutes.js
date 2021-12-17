const express = require("express");
const router = express.Router();

const authController = require("../Controller/authController");

router.route("/signup").post(authController.createUser);
router.route("/login").get(authController.login);

module.exports = router;
