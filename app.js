const express = require("express");
const app = express();
const mongoose = require("mongoose");
const blogRouter = require("./Routes/routes");
const userRouter = require("./Routes/UserRoutes");
const redis = require("redis");
const session = require("express-session");
require("dotenv").config();

//get the redis store

let RedisStore = require("redis-connect")(session);
//setting up the redis clinet
let redisClient = redis.createClient({
  host: "redis",
  port: 6379,
});

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGO_URI;

app.get("/", (req, res) => {
  res.send("<h1>Docker Compose</h1>");
});

app.use(express.json());

app.use("/home", blogRouter);
app.use("/home", userRouter);

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    secret: "keyboard cat",
    resave: false,
  })
);

const connectToDB = async () => {
  await mongoose.connect(URI, { useNewUrlParser: true });
  console.log("Connected to the Database");
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
