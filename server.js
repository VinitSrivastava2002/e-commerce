import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

/* TO CONNECT WITH MONGO DB - START*/
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB Connected Successfull"))
  .catch((error) => console.log(error));
/* TO CONNECT WITH MONGO DB - END*/

app.get("/api/check", (req, res) => {
  res.send("check working");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
