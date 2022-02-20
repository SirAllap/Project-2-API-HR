const JobOfferModel = require("../models/jobOffer.model");
const UserModel = require("../models/users.model");
const RequisitionModel = require("../models/requisitions.model");

async function createJobOffer(req, res) {
  try {
    req.body.author = res.locals.user.id;
    const jobOffer = await JobOfferModel.create(req.body);
    res.status(200).json(jobOffer);
  } catch (error) {
    res.status(500).send(`Error posting job offer: ${error}`);
  }
}

async function deleteJobOffer(req, res) {
  try {
    const jobOffer = await JobOfferModel.findByIdAndDelete(
      req.params.jobOfferId
    );
    res.status(200).json(`${jobOffer.title} has been delete`);
  } catch (error) {
    res.status(500).send(`Error deleting job offer: ${error}`);
  }
}

async function getAllJobOffers(req, res) {
  try {
    if (res.locals.user.role === "candidate") {
      const jodOffers = await JobOfferModel.find(req.query, {
        skills: 0,
        languages: 0,
        salary: 0,
        author: 0,
        postCreatedDate: 0,
        __v: 0,
        description: 0,
        category: 0,
        requisition: 0,
      });
      return res.status(200).json(jodOffers);
    } else {
      const jodOffers = await JobOfferModel.find(req.query, {
        skills: 0,
        languages: 0,
        salary: 0,
        postCreatedDate: 0,
        __v: 0,
        description: 0,
        category: 0,
      }).populate("author", "name surname role");
      return res.status(200).json(jodOffers);
    }
  } catch (error) {
    res.status(500).send(`Error obtaining job offers: ${error}`);
  }
}

async function getOneJobOffer(req, res) {
  try {
    if (res.locals.user.role === "candidate") {
      const jobOffer = await JobOfferModel.findById(req.params.jobOfferId)
        .populate({ path: "skills", select: { skills: 1 } })
        .populate({ path: "languages.language", select: { language: 1 } })
        .populate({ path: "category", select: { category: 1 } });
      return res.status(200).json({
        Title: jobOffer.title,
        Company: jobOffer.company,
        Description: jobOffer.description,
        Skill: jobOffer.skills,
        Languages: jobOffer.languages,
        WorkSchedule: jobOffer.workSchedule,
        WorkModel: jobOffer.workModel,
        Location: jobOffer.location,
        Salary: jobOffer.salary,
        Category: jobOffer.category,
        JobOfferCreated: jobOffer.postCreatedDate,
      });
    } else {
      const jobOffer = await JobOfferModel.findById(req.params.jobOfferId)
        .populate({ path: "skills", select: { skills: 1 } })
        .populate({ path: "languages.language", select: { language: 1 } })
        .populate({ path: "category", select: { category: 1 } })
        .populate("author", "name surname role")
        .populate({
          path: "requisition",
          select: { jobPost: 0, __v: 0 },
          populate: {
            path: "candidate",
            model: "user",
            select: { name: 1, surname: 1, email: 1 },
            populate: {
              path: "experience",
              model: "experience",
              select: { userCand: 0, other: 0, skills: 0, languages: 0 },
              populate: "nationality",
            },
          },
        });
      return res.status(200).json(jobOffer);
    }
  } catch (error) {
    res.status(500).send(`Error obtaining job offer: ${error}`);
  }
}

async function updateJobOffer(req, res) {
  try {
    const jobOffer = await JobOfferModel.findByIdAndUpdate(
      req.params.jobOfferId,
      req.body,
      {
        new: true,
        runValidator: true,
      }
    );
    res
      .status(200)
      .json(`${jobOffer.title} post has been successfully updated`);
  } catch (error) {
    res.status(500).send(`Error updating job offer: ${error}`);
  }
}

async function applyToJobOffer(req, res) {
  try {
    req.body.candidate = res.locals.user.id;
    const id = await req.params.jobOfferId;
    req.body.jobPost = id;
    const apply = await RequisitionModel.create(req.body);
    const jobOffer = await JobOfferModel.findById(req.params.jobOfferId);
    jobOffer.requisition.push(apply.id);
    await jobOffer.save();
    const user = await res.locals.user;
    user.requisition.push(apply.id);
    await user.save();
    res.status(200).json("You has been successfully apply to job offer");
  } catch (error) {
    res.status(500).send(`Error applying to job offer: ${error}`);
  }
}

module.exports = {
  createJobOffer,
  deleteJobOffer,
  getAllJobOffers,
  getOneJobOffer,
  updateJobOffer,
  applyToJobOffer,
};
