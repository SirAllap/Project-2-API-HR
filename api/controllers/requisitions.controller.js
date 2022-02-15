const { send } = require("express/lib/response");
const RequisitionModel = require("../models/requisitions.model");

module.exports = {
  rejectRequisition,
  interviewRequisition,
};

async function rejectRequisition(req, res) {
  try {
    const reject = await RequisitionModel.findById(req.params.reqId);
    reject.state = "Rejected";
    reject.save();
    res.status(200).json(reject);
  } catch (error) {
    res.status(500).send(`Error updating requisition: ${error}`);
  }
}

async function interviewRequisition(req, res) {
  try {
    const interview = await RequisitionModel.findById(req.params.reqId);
    interview.state = "Interview pending";
    interview.save();
    res.status(200).json(interview);
  } catch (error) {
    res.status(500).send(`Error updating requisition: ${error}`);
  }
}
