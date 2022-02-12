const router = require("express").Router();
const { authUser, authAdmin, authManager, authRole } = require("../utils"); // Authenticated Route

const {
  createJobOffer,
  deleteJobOffer,
  getAllJobOffers,
  getOneJobOffer,
  updateJobOffer
} = require("../controllers/jobOffer.controller");

router.post("/", authUser, authManager, createJobOffer);
router.delete("/:jobOfferId", authUser, authManager, deleteJobOffer);
router.get("/", authUser, authManager, getAllJobOffers);
router.get("/:jobOfferId", authUser, authManager, getOneJobOffer);
router.put("/:jobOfferId", authUser, authManager, updateJobOffer);

module.exports = router;
