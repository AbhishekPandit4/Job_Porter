import mongoose, { Schema } from "mongoose";

const applicationSchema = new Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    require: true,
  },
  application: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  status: {
    type: mongoose.Schema.Types.ObjectId,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
},{timestamps:true});

export const Appliction=mongoose.model("Appliction",applicationSchema)
