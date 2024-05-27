import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI as string;

  return await mongoose.connect(mongoURI);
};

export default connectDB;
