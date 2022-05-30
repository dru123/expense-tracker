const express = require("express");
const app = express();
const morgan = require("morgan");
const colors = require("colors");
const transaction = require("./routes/index");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use("/api/v1/transcation", transaction);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connect");
    app.listen(
      5000,
      console.log(
        `server is mode of ${process.env.NODE_ENV} and port is ${process.env.PORT}`
          .yellow.bold
      )
    );
  })
  .catch((err) => {
    console.log(err);
  });
