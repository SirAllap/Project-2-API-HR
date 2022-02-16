const router = require("express").Router();
const { authUser, authAdmin, authManager, authRole } = require("../utils"); // Authenticated Route

const {
  rejectRequisition,
  interviewRequisition,
  hireRequisition
} = require("../controllers/requisitions.controller");

router.put("/:reqId/reject", authUser, authManager, rejectRequisition);
router.put("/:reqId/interview", authUser, authManager, interviewRequisition);
router.put("/:reqId/hire", authUser, authManager, hireRequisition);

module.exports = router;
