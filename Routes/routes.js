const express = require("express");
const router = express.Router();
const { getAllPost, createPost } = require("../Controller/BlogController");
const { protect } = require("../Middleware/authMiddleware");

router.route("/").get(getAllPost).post(createPost);

module.exports = router;
