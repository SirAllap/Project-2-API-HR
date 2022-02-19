const bcrypt = require("bcrypt"); // require to encrypt passwords

const UserModel = require("../models/users.model");
const ExperienceModel = require("../models/experiences.model");
const { populate } = require("../models/users.model");

module.exports = {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  addExperience,
  updateExperience,
  deleteExperience,
};

async function getUserProfile(req, res) {
  try {
    const user = await UserModel.findById(res.locals.user.id, {
      password: 0,
      role: 0,
      createdAt: 0,
      skills: 0,
      __v: 0,
    })
      .populate({
        path: "requisition",
        select: { candidate: 0, __v: 0 },
        populate: {
          path: "jobPost",
          model: "jobOffer",
          select: { title: 1 },
        },
      })
      .populate({
        path: "experience",
        model: "experience",
        select: { userCand: 0 },
        populate: {
          path: "skills",
          select: { __v: 0, createdAt: 0 },
        },
      })
      .populate({
        path: "experience",
        model: "experience",
        populate: {
          path: "languages.language",
          select: { __v: 0, createdAt: 0 },
        },
      })
      .populate({
        path: "experience",
        model: "experience",
        populate: {
          path: "nationality",
          select: { __v: 0 },
        },
      });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(`Error getting user profile: ${error}`);
  }
}

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
  }
}

async function deleteUserProfile(req, res) {
  try {
    const user = await UserModel.findByIdAndDelete(res.locals.user.id);
    res.status(200).json(`${user.email}, has been delete.`);
  } catch (error) {
    res.status(500).send(`Error updating user profile: ${error}`);
  }
}

async function addExperience(req, res) {
  try {
    req.body.userCand = res.locals.user.id;
    const experience = await ExperienceModel.create(req.body);
    const user = await res.locals.user;
    user.experience = experience.id;
    await user.save();
    res
      .status(200)
      .json("Experience has been successfully added to your profile");
  } catch (error) {
    res.status(500).send(`Error adding experience to your profile: ${error}`);
  }
}

async function updateExperience(req, res) {
  try {
    const experience = await ExperienceModel.findOneAndUpdate(
      res.locals.user.experience,
      req.body,
      {
        new: true,
        runValidator: true,
      }
    ).populate("skills");
    experience.save();
    res.status(200).json(experience);
  } catch (error) {
    res.status(500).send(`Error updating experience to your profile: ${error}`);
  }
}

async function deleteExperience(req, res) {
  try {
    const experience = await ExperienceModel.findById(
      res.locals.user.experience
    );
    experience.experience.remove(req.params.expId);
    experience.save();
    res.status(200).json(experience.experience);
  } catch (error) {
    res.status(500).send(`Error deleting experience to your profile: ${error}`);
  }
}
