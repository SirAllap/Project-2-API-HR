const bcrypt = require("bcrypt"); // require to encrypt passwords
const jwt = require("jsonwebtoken"); // required to generate a token

const UserModel = require("../models/users.model"); // bring user model

async function signup(req, res) {
  // function to sign a user
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

async function login(req, res) {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).send("Email or password incorrect");
      return;
    }
    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (err) throw new Error(err);
      if (!result) {
        return res.json({ error: "Email or password incorrect" });
      }
      const token = jwt.sign({ email: user.email }, process.env.SECRET, {
        expiresIn: "1h",
      });
      // create a token with the user email
      res.status(200).json({ email: user.email, token });
    });
  } catch (error) {
    res.status(500).send("Error logging user");
  }
}

module.exports = {
  signup,
  login,
};
