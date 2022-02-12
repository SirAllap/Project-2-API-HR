const router = require("express").Router();
const { authUser, authAdmin, authManager, authRole } = require("../utils"); // Authenticated Route

const { 
    createJobOffer,
    deleteJobOffer,
    // getAllJobOffers,
    // getOneJobOffer
 } = require("../controllers/jobOffer.controller");

router.post("/", authUser, authManager, createJobOffer);
router.delete("/:jobOfferId", authUser, authManager, deleteJobOffer);

module.exports = router;
