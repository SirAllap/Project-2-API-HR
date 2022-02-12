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
    res.status(500).send(`Error posting job offer: ${error}`);
    throw new Error(`Error deleting job offer: ${error}`);
  }
}

async function getJobOffer(req, res) {
  try {
  } catch (error) {
    res.status(500).send(`Error posting job offer: ${error}`);
    throw new Error(`Error posting job offer: ${error}`);
  }
}

module.exports = {
  createJobOffer,
  deleteJobOffer,
  //   getAllJobOffers,
  //   getOneJobOffer,
};
