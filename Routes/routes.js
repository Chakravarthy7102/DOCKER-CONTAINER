const express = require("express");
const router = express.Router();
const { getAllPost, createPost } = require("../Controller/BlogController");

router.route("/").get(getAllPost).post(createPost);

module.exports = router;
