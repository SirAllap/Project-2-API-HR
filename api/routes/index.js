const router = require("express").Router();

const profileRouter = require("./profile.router");
const usersRouter = require("./users.router");
const authRouter = require("./auth.router");
const jobOfferRouter = require("./jobOffer.router");
const requisitionsRouter = require("./requisition.router");

const adminRouter = require("./admin.router");

router.use("/users/profile", profileRouter);
router.use("/users", usersRouter);
router.use("/auth", authRouter);
router.use("/job-offer", jobOfferRouter);
router.use("/requisitions", requisitionsRouter);

router.use("/admin", adminRouter);

module.exports = router;
