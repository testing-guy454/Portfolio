import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.log("⚠️  MongoDB URI not provided - running without database");
      return;
    }

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    console.log("⚠️  Continuing without database connection");
    // Don't exit process, allow app to continue without DB
  }
}

export default connectDB;