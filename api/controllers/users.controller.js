const UserModel = require('../models/users.model')

module.exports = {
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
}



async function createUser (req, res) {
    try {
        const user = await UserModel.create(req.body)
        res.status(200).json(user)
      
    } catch (error) {
      throw new Error(' User no create ' + error)
    }
  }

  async function getAllUsers (req, res) {
    try {
        const users = await UserModel.find()
        res.status(200).json(users)
      
    } catch (error) {
      throw new Error(' Users not found ' + error)
    }
  }

  async function getOneUser (req, res) {
    try {
        const user = await UserModel.findById(req.params.userId)
        res.status(200).json(user)
      
    } catch (error) {
      throw new Error(' User not found ' + error)
    }
  }

  async function updateUser (req, res) {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.userId, req.body, {
            new: true,
            runValidator: true
        })
        res.status(200).json(user)
      
    } catch (error) {
      throw new Error(' User can not update ' + error)
    }
  }

  async function deleteUser (req, res) {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.userId)
        res.status(200).json(user)
      
    } catch (error) {
      throw new Error(' User can not delete ' + error)
    }
  }
