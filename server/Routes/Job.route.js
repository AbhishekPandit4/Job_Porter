import express from "express";

import isAuthenticated from "../Middlewares/isAuthenticated.js";
import { getAdminJobs, getJobs, jobById, postJob } from "../controllers/Job.controller.js";
const router=express.Router()

router.route("/post").post(isAuthenticated,postJob)
router.route("/get").get(isAuthenticated,getJobs)
router.route("/getadminjobs").get(isAuthenticated,getAdminJobs)
router.route("/get/:id").get(isAuthenticated,jobById)


export default router;
