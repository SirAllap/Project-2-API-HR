const router = require("express").Router();
const { authUser, authCandidate } = require("../utils");

const {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  addExperience,
  updateExperience,
  deleteExperience,
} = require("../controllers/profile.controller");

router.get("/", authUser, getUserProfile);
router.put("/", authUser, authCandidate, updateUserProfile);
router.delete("/", authUser, authCandidate, deleteUserProfile);
router.post("/experience", authUser, authCandidate, addExperience);
router.put("/experience", authUser, authCandidate, updateExperience);
router.delete("/experience/:expId", authUser, authCandidate, deleteExperience);

module.exports = router;
