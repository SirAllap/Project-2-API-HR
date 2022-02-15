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
      })
        .populate("skills", "skills")
        .populate("languages", "language");
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
      })
        .populate("skills", "skills")
        .populate("languages", "language")
        .populate("author", "name surname role");
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
        .populate("skills")
        .populate("languages.language")
        .populate("category");
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
        .populate("skills")
        .populate("languages.language")
        .populate("author")
        .populate("category")
        .populate({
          path: "requisition",
          populate: {
            path: "candidate",
            model: "user",
            populate: {
              path: "experience",
              model: "experience",
              populate: "skills",
              populate: {
                path: "languages",
                populate: {
                  path: "language",
                  model: "languages"
                }
              },
              populate: "nationality",
            },
          },
        });
      return res.status(200).json({ jobOffer });
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
    res.status(200).json(apply);
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
