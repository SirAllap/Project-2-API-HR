const jwt = require("jsonwebtoken");

const UserModel = require("../models/users.model");

// Authenticate Middleware
function authUser(req, res, next) {
  if (!req.headers.token) {
    // checks the header for a token
    res.status(403).json({ error: "No Token found" });
  } else {
    jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
      // takes token + secert phrase
      if (err) {
        res.status(403).json({ error: "Token not valid" });
      }

      UserModel.findOne(
        { email: token.email },
        { password: 0, __v: 0, createdAt: 0 }
      )
        // finds user with the email inside the token that is in header
        .then((user) => {
          res.locals.user = user;
          // response with the user
          next();
        });
    });
  }
}

function authAdmin(req, res, next) {
  if (res.locals.user.role === "admin") {
    return next();
  }
  return res.send("Unauthorized access");
}

function authRole(req, res, next) {
  if (
    res.locals.user.role === "admin" ||
    res.locals.user.role === "manager" ||
    res.locals.user.role === "recruiter"
  ) {
    return next();
  }
  return res.send("Unauthorized access");
}

function authManager(req, res, next) {
  if (res.locals.user.role === "admin" || res.locals.user.role === "manager") {
    return next();
  }
  return res.send("Unauthorized access");
}

function authCandidate(req, res, next) {
  if (
    res.locals.user.role === "admin" ||
    res.locals.user.role === "candidate"
  ) {
    return next();
  }
  return res.send("Unauthorized access");
}
module.exports = {
  authUser,
  authAdmin,
  authRole,
  authManager,
  authCandidate,
};
