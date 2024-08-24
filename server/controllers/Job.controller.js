import { Job } from "../models/job.model.js";

export const postJob = async (req, res) => {
  // Job Crecate by Admin
  const {
    title,
    description,
    requirements,
    salary,
    location,
    jobType,
    position,
    experience,
    companyId,
  } = req.body;

  const userId = req.id;

  if (
    !title ||
    !description ||
    !requirements ||
    !salary ||
    !location ||
    !jobType ||
    !position ||
    !experience ||
    !companyId
  ) {
    return res.status(400).json({
      message: "somthing is missing",
      success: false,
    });
  }
  const role = await Job.create({
    title,
    description,
    requirements: requirements.split(","),
    salary: Number(salary),
    location,
    jobType,
    position,
    experienceLevel: experience,
    company: companyId,
    created_by: userId,
  });
  return res.status(201).json({
    message: "New Job crecated Succseefully",
    role,
    success: true,
  });
};

// Get All Jobs for Student

export const getJobs = async (req, res) => {
  try {
    // filter jobs
    const keyword = req.query.keyword || "";
    const jobQuery = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const role = await Job.find(jobQuery)
      .populate({
        path: "company",
      })
      .sort({ createdAt: -1 });

    if (!role) {
      return res.status(400).json({
        message: "Jobs not Find",
        success: false,
      });
    }
    return res.status(201).json({
      role,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get Job by Id for Student
export const jobById = async (req, res) => {
  try {
    const roleId = req.params.id;
    console.log("roleId", roleId);

    const role = await Job.findById(roleId);
    console.log("role", role);

    if (!role) {
      return res.status(404).json({
        message: "Job not find",
        success: false,
      });
    }
    return res.status(201).json({ role, success: true });
  } catch (error) {
    console.log(error);
  }
};

// Admin ne ketala job crecat krya 6
export const getAdminJobs = async (req, res) => {
  const adminId = req.id;
  console.log("adminId", adminId);

  // je user login 6 teuser re ketili job creacte kasi tebatave
  const role = await Job.find({ created_by: adminId });
  if (!role) {
    return res.status(404).json({
      message: "Job not Foud",
      success: false,
    });
  }
  return res.status(201).json({ role, success: true });
};
