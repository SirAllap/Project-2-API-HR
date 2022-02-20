const bcrypt = require("bcrypt"); // require to encrypt passwords
const jwt = require("jsonwebtoken"); // required to generate a token

const UserModel = require("../models/users.model"); // bring user model

async function createUser(req, res) {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    // take the password that we sent by post from the body and encrypt
    const user = await UserModel.create(req.body);
    // bring the model of the user from the body
    const payload = { email: user.email };
    // create a payload that we will pass inside token to auth user
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });
    // create the token from the payload
    res.status(200).json({ email: user.email, token });
    // response the token to the front and other info in case we need to manage in the front.
  } catch (error) {
    res.status(500).send(`Error creating user: ${error}`);
  }
}

async function getAllUsers(req, res) {
  try {
    if (
      res.locals.user.role === "admin" ||
      res.locals.user.role === "manager"
    ) {
      const users = await UserModel.find(req.query,{ password: 0 });
      res.status(200).json(users);
    } else {
      const users = await UserModel.find(
        {
          role: "candidate",
        },
        { password: 0 }
      ).populate({
        path: "requisition",
        select: { candidate: 0, __v: 0 },
        populate: {
          path: "jobPost",
          model: "jobOffer",
          select: { title: 1 },
        },
      });
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).send(`Error obtaining users: ${error}`);
  }
}

async function getOneUser(req, res) {
  try {
    const user = await UserModel.findById(req.params.userId, { password: 0 })
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
    if (
      user.role !== "candidate" &&
      (res.locals.user.role === "manager" ||
        res.locals.user.role === "recruiter")
    ) {
      res.status(401).send("You are not allowed to see this user");
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).send(`Error obtaining user: ${error}`);
  }
}

async function updateUser(req, res) {
  try {
    const user = await UserModel.findByIdAndUpdate(
      req.params.userId,
      req.body,
      {
        new: true,
        runValidator: true,
      }
    );
    res.status(200).json("Your changes were successfully saved");
  } catch (error) {
    res.status(500).send(`Error finding user: ${error}`);
  }
}

async function deleteUser(req, res) {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(`Error deleting user: ${error}`);
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
};
