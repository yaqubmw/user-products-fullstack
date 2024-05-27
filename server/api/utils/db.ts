import mongoose, { ConnectOptions } from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  return mongoose.connect(
    process.env.MONGO_URL as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions
  );
};

export default connectDB;
