import mongoose, { Types } from "mongoose";
// import { experimental_taintUniqueValue } from "react";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  email:{
    type:String,
    require:true,
    unique:true
  },
  phoneNumber:{
    type:Number,
    require:true,
  },
  password:{
    type:String,
    require:true
  },
  role:{
    type:String,
    enum:["student",'recruiter'], // option 6 mate ahya enum no use karyo 6 
    require:true,
  },
  profile:{
    bio:{type:String},
    skill:[{type:String}],
    resume:{type:String}, // URL to resume
    resumeOriginalName:{type:mongoose.Schema.Types.ObjectId,ref:'company'},
    profilePhoto:{
        type:String,
        default:""
    }
  },
},{timestamps:true});

export const User=mongoose.model("User",userSchema) 
