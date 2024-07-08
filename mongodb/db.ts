import mongoose from "mongoose";

const connectionString = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@48hourshack.tcqz3t9.mongodb.net/?retryWrites=true&w=majority&appName=48hourshack`;

/** */

if (!connectionString) {
  throw new Error("Please provide a valid connection string");
}

const connectDB = async () => {
  if (mongoose.connection?.readyState >= 1) {
    // console.log("---- Already connected to MongoDB ----");
    return;
  }

  try {
    console.log("---- Connecting to MongoDB ----");
    await mongoose.connect(connectionString);
    console.log("---- Connected to MongoDB ----");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

export default connectDB;
