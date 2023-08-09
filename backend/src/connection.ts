import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbUrl = process.env.MONGO_URL as string;
    await mongoose.connect(dbUrl);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
