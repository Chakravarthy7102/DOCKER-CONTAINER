const mongoose = require("mongoose");

const BlogModel = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("BlogModel", BlogModel);
