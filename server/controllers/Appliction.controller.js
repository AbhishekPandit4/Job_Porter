import { application } from "../models/appliction.model.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;

    if (!jobId) {
      return res.status(400).json({
        message: "Job Id is requier",
        success: false,
      });
    }
    // chek if the user has already applied

    const existingAppliction = await application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingAppliction) {
      return res.status(401).json({
        message: "you have alredy for this job",
        success: false,
      });
    }

    // chek if the job exist
    const job = await application.findOne(jobId);

    if (!job) {
      return res.status(400).json({
        message: "Job is not Fond",
        success: false,
      });
    }

    // crecat new Appliction
    const newAppliction = await application.create({
      job: jobId,
      appliction: userId,
    });

    return res.status(200).json({
      message: "Job Appliyed Sucessfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// get job
// student je job appliy kari 6 te job batvse ana ma 2 schma use thay job and applicent 
// job schema ae job batEmploymentave and applicant schema ae kone appliction kari 6 ae batve

// export const getAppliedJob=async (req,res)=>{
//     try {
//         const userId=req.id;
//         const employment=await application.find({applicant:userId}).sort({createAt:-1}).populate({
//           path:"job",
//           options:({sort:{crecatAt:-1}}),
//           populate({
//             path:"company",
//             options:({sort:(crecatAt:-1)})
//           })
//         })
//         if(!employment){
//           return res.status(400).json({
//             json
//           })
//         }
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// Employment