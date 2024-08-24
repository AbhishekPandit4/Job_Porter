import { company } from "../models/company.model.js";

// Company registretion
export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;

    if (!companyName) {
      return res.status(400).json({
        message: "Company is required",
        Success: false,
      });
    }

    let organization = await company.findOne({ name: companyName });

    if (organization) {
      return res.status(400).json({
        message: "you can not register same company",
        Success: false,
      });
    }
    organization = await company.create({
      name: companyName,
      userId: req.id, //Authetication mathi male
    });
    return res.status(201).json({
      message: "Company Registaerd Successfully",
      organization,
      Success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get all companys
export const getCompany = async (req, res) => {
  try {
    const userId = req.id; //login is user id (je user login kase tenij comapny bata va mate)
    console.log("userId", userId);

    const organization = await company.find({ userId });
    console.log("organization", organization);

    if (!organization) {
      return res.status(400).json({
        message: "Organization is not found",
        Success: false,
      });
    }

    return res.status(200).json({
      message: "get All Comapny",
      organization,
      Success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// get compnay by id

export const getCompanyById = async (req, res) => {
  try {
    const comapnyId = req.params.id;
    const organization = await company.findById(comapnyId);
    if (!organization) {
      return res.status(400).json({
        message: "copany not found",
        Success: false,
      });
    }
    return res.status(200).json({
      organization,
      Success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// Update Company

export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;
    //     ahva cloudnery avse

    const updateData = { name, description, website, location };
    const organization = await company.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!organization) {
      return res.status(400).json({
        message: "Company not found",
        Success: false,
      });
    }
    return res.status(200).json({
      message: "Comapny information Upadted",
      Success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
