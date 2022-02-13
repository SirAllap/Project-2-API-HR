const mongoose = require('mongoose')

const candidateSchema = new mongoose.Schema({
  skills: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "skills",
      required: [true, "Skills are required"],
    },
  ],
  experience: [
    {
      title:
    },
  ],
})

const CandidateModel = mongoose.model('candidate', candidateSchema)
module.exports = CandidateModel
