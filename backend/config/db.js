import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Use the environment variable for MongoDB URI
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error.message);
    process.exit(1); // Exit process with failure
  }
};
