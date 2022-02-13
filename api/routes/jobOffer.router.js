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
router.get("/", getAllJobOffers);
router.get("/:jobOfferId", getOneJobOffer);
router.put("/:jobOfferId", authUser, authManager, updateJobOffer);

module.exports = router;
