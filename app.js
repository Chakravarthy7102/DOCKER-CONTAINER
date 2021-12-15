const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGO_URI;

app.get("/", (req, res) => {
  res.send("<h1>Docker Compose</h1>");
});

const connectToDB = async () => {
  await mongoose.connect(URI, () => {
    console.log("This is Connected to the Database");
  });
};

const start = () => {
  try {
    connectToDB();
    app.listen(PORT, () => {
      console.log(`the app is listening at ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
