const BlogModel = require("../Model/BolgModel");

//getAllPost

const getAllPost = async (req, res) => {
  try {
    const allPosts = await BlogModel.find();
    res.status(200).json({ allPosts });
  } catch (error) {
    res.status(500).json({
      msg: "Please Try Again",
    });
  }
};

//createPost

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new BlogModel({ title, content });
    await newPost.save();
    res.status(200).json({ newPost });
  } catch (error) {
    res.status(500).json({
      msg: "Error Found 500",
    });
  }
};

module.exports = { getAllPost, createPost };
