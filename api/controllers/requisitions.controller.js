const { send } = require("express/lib/response");
const RequisitionModel = require("../models/requisitions.model");
const JobOfferModel = require("../models/jobOffer.model")

module.exports = {
  rejectRequisition,
  interviewRequisition,
  hireRequisition
};

async function rejectRequisition(req, res) {
  try {
    const reject = await RequisitionModel.findById(req.params.reqId);
    reject.state = "Rejected";
    reject.save();
    const job = await JobOfferModel.findById(reject.jobPost)
    job.requisition.remove(req.params.reqId)
    job.save();
    res.status(200).json(`The state of requisition has been changed to ${reject.state}`);
  } catch (error) {
    res.status(500).send(`Error updating requisition: ${error}`);
  }
}

async function interviewRequisition(req, res) {
  try {
    const interview = await RequisitionModel.findById(req.params.reqId);
    interview.state = "Interview pending";
    interview.save();
    res.status(200).json(`The state of requisition has been changed to ${interview.state}`);
  } catch (error) {
    res.status(500).send(`Error updating requisition: ${error}`);
  }
} 

async function hireRequisition(req, res) {
  try {
    const hire = await RequisitionModel.findById(req.params.reqId);
    hire.state = "Hired";
    hire.save();
    res.status(200).json(`The state of requisition has been changed to ${hire.state}`);
  } catch (error) {
    res.status(500).send(`Error updating requisition: ${error}`);
  }
}
