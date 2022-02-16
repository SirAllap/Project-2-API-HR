const router = require("express").Router();
const { authUser, authAdmin, authManager, authRole } = require("../utils"); // Authenticated Route

const {
  rejectRequisition,
  interviewRequisition,
} = require("../controllers/requisitions.controller");

router.put("/:reqId/reject", authUser, authManager, rejectRequisition);
router.put("/:reqId/interview", authUser, authManager, interviewRequisition);

module.exports = router;
