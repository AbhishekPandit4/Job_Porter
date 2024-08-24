import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    description: {
      type: String,
    },
    website: {
      type: String,
      require: true,
    },
    location: {
      type: String,
    },
    logo: {
      type: String, //URL to comnpy name
    },
    // comoany ma User ne jion karyo chhe
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
  { timestamps: true }
);

export const company = mongoose.model("company", companySchema);
