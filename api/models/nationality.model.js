const mongoose = require('mongoose')

const nationalitySchema = new mongoose.Schema({
    nationality: {
        type: String,
        required: [true, 'Nationality is required'],
        unique: [true, 'This nationality already exist']
    }
}); 

const NationalitysModel = mongoose.model('nationalitys', nationalitySchema)
module.exports = NationalitysModel 