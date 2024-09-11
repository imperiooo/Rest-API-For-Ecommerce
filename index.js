const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cartRoute = require("./routes/cart");


dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });


app.use("/api/carts", cartRoute);


app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});