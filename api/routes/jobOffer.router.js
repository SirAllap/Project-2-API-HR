const router = require("express").Router();
const {
  authUser,
  authAdmin,
  authManager,
  authRole,
  authCandidate,
} = require("../utils"); // Authenticated Route

const {
  createJobOffer,
  deleteJobOffer,
  getAllJobOffers,
  getOneJobOffer,
  updateJobOffer,
  applyToJobOffer,
} = require("../controllers/jobOffer.controller");

router.post("/", authUser, authManager, createJobOffer);
router.delete("/:jobOfferId", authUser, authManager, deleteJobOffer);
router.get("/", authUser, getAllJobOffers);
router.get("/:jobOfferId", authUser, getOneJobOffer);
router.put("/:jobOfferId", authUser, authManager, updateJobOffer);

router.post("/:jobOfferId/apply", authUser, authCandidate, applyToJobOffer);

module.exports = router;
