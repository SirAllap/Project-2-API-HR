// Candidate:     <ObjectId> (Candidate)
// JobPost:       <ObjectId> (JobOffer)
// Valoraciones:  String
// ReqDate:       Date
// State:         String enum
//                [To review, Rejected, Interview pending]

const mongoose = require("mongoose");

const requisitionSchema = new mongoose.Schema({
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  jobPost: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "jobOffer",
  },
  state: {
    type: String,
    enum: ["To review", "Rejected", "Interview pending"],
    required: false,
    default: "To review",
  },
  reqDate: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
});

const RequisitionModel = mongoose.model("requisition", requisitionSchema);
module.exports = RequisitionModel;