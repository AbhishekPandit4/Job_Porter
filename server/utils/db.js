import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongodb conntecd sucessfully");
  } catch (error) {
    console.log("error",error);
    process.exit(1)
  }
};
export default connectDB;
