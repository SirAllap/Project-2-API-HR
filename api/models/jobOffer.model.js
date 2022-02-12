// const { type } = require('express/lib/response')
const mongoose = require('mongoose')

const jobOfferSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
      },
      company: {
        type: String,
        required: [true, 'Company is required']
      },
      description: {
        type: String,
        required: [true, 'Description is required']
      },
      skills: 
      [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'skills',
        required: [true, 'Skills are required']
      }],
      // languages: 
      //   [{
      //       language:
      //       {
      //       type: mongoose.Schema.Types.ObjectId,
      //       ref: 'laguage'
      //       },
      //       level: 
      //       {
      //         type: String,
      //         enum: ['Basic', 'Intermediate', 'Native']
      //       }
      //   }],
      // requisitions: {
      //   type: String,
      // },
      workModel: {
        type: String,
        enum: ['Remote', 'Hybrid', 'Office'],
        required: [true, 'Work model is required']
      },
      location:{
        type: String,
        required: [true, 'Location is required']
      },
      Salary: {
        type: String,
        required: [true, 'Salary is required']
      }, 
      // Category: {
      //   type: String
      // },
      authorOfJobOffer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        immutable: true
      },
      postCreatedDate: {
        type: Date,
        immutable: true
      }
})

const JobOfferModel = mongoose.model('jobOffer', jobOfferSchema)
module.exports = JobOfferModel