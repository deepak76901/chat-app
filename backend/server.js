import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.routes.js";

dotenv.config();

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected Successfulyy");
  } catch (error) {
    console.log(error.message);
  }
};

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port : ${process.env.PORT}`);
});
connectDB();

app.use("/api/auth", authRouter);
