import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.routes.js";
import authRoute from "./routes/auth.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

/* TO CONNECT WITH MONGO DB - START */
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB Connected Successfull"))
  .catch((error) => console.log(error));
/* TO CONNECT WITH MONGO DB - END */

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
