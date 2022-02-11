const bcrypt = require("bcrypt"); // require to encrypt passwords

const UserModel = require("../models/users.model"); // bring user model

module.exports = {
  updateUserProfile,
  deleteUserProfile,
};

async function updateUserProfile(req, res) {
  try {
    const user = await UserModel.findByIdAndUpdate(
      res.locals.user.id,
      req.body,
      {
        new: true,
        runValidator: true,
      }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(`Error updating user profile: ${error}`);
    throw new Error(`Error updating user profile: ${error}`);
  }
}

async function deleteUserProfile(req, res) {
    try {
      const user = await UserModel.findByIdAndDelete(res.locals.user.id);
      res.status(200).json(`${user.email}, has been delete.`);
    } catch (error) {
      res.status(500).send(`Error updating user profile: ${error}`);
      throw new Error(`Error updating user profile: ${error}`);
    }
  }

