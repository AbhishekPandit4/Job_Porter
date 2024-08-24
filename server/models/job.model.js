import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  requirements: [
    {
      type: String,
      require: true,
    },
  ],
  salary: {
    type: String,
    require: true,
  },
  experienceLevel: {
    type: Number,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  jobType: {
    type: String,
    require: true,
  },
  position: {
    type: String,
    require: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "company",
    require: true,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  application: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appliction",
    },
  ],
});

export const Job = mongoose.model("Job", jobSchema);
