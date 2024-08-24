import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
// import userRouter from "./Routes/user.route.js"
import userRouter from "./Routes/user.route.js";
import companyRoute from "./Routes/Company.route.js";
import jobRoute from "./Routes/Job.route.js";

dotenv.config({});

// middelwer
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// const corsOption={
//     origin:"http//localhost:5173",
//     Credential:true
// }

const corsOption = {
  origin: "http://localhost:5173", // Correct URL
  credentials: true, // Lowercase 'c' in credentials
};

app.use(cors(corsOption));

const PORT = process.env.PORT || 3000;

// api
app.use("/api/v1/user", userRouter);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);

// app.listen(PORT,()=>{
//     connectDB()
//     console.log(`server is running at port ${PORT}`);
// })
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running at port ${PORT}`);
});
