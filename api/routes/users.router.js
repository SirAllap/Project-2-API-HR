const router = require("express").Router();
const { authUser, authAdmin, authRole } = require("../utils"); // Authenticated Route

const {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

router.post("/", authUser, authAdmin, createUser);
router.get("/", authUser, authRole, getAllUsers); // get all users candidates
router.get("/:userId", authUser, authRole, getOneUser);
router.put("/:userId", authUser, authAdmin, updateUser);
router.delete("/:userId", authUser, authAdmin, deleteUser);

module.exports = router;
