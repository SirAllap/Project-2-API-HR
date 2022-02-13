const JobOfferModel = require("../models/jobOffer.model");
const UserModel = require("../models/users.model");

async function createJobOffer(req, res) {
  try {
    req.body.author = res.locals.user.id;
    const jobOffer = await JobOfferModel.create(req.body);
    res.status(200).json(jobOffer);
  } catch (error) {
    res.status(500).send(`Error posting job offer: ${error}`);
    throw new Error(`Error posting job offer: ${error}`);
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
    throw new Error(`Error deleting job offer: ${error}`);
  }
}

async function getAllJobOffers(req, res) {
  try {
    const jodOffers = await JobOfferModel.find(req.query)
      .populate("skills", "skills")
      .populate("languages", "language")
      .populate("author", "name surname role" );
    res.status(200).json(jodOffers);
  } catch (error) {
    res.status(500).send(`Error obtaining job offers: ${error}`);
    throw new Error(`Error obtaining job offers: ${error}`);
  }
}

async function getOneJobOffer(req, res) {
  try {
    const jobOffer = await JobOfferModel.findById(req.params.jobOfferId)
      .populate("skills", "skills")
      .populate("languages", "language");
    res.status(200).json({
      Title: jobOffer.title,
      Company: jobOffer.company,
      Description: jobOffer.description,
      Skill: jobOffer.skills,
      Languages: jobOffer.languages,
      Work_model: jobOffer.workModel,
      Location: jobOffer.location,
      Salary: jobOffer.salary,
      Author: jobOffer.author,
    });
  } catch (error) {
    res.status(500).send(`Error obtaining job offer: ${error}`);
    throw new Error(`Error obtaining job offer: ${error}`);
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
  } catch (error) {}
}

module.exports = {
  createJobOffer,
  deleteJobOffer,
  getAllJobOffers,
  getOneJobOffer,
  updateJobOffer,
};
