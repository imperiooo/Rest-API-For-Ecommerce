const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user.js")
// const cartRoute = require("./routes/cart");


dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });


// app.use("/api/carts", cartRoute);

app.use("/api/user", userRoute);

// app.get("/api/test", () =>{
//   console.log("Test is Succesful");
// });


app.listen(5000, () => {
  console.log("Backend server is running!");
});