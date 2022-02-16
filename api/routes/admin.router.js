const router = require("express").Router();
const { authUser, authAdmin } = require("../utils");

const {
  postSkills,
  deleteSkill,
  postLanguage,
  deleteLanguage,
  postNationality,
  deleteNationality,
  postCategory,
  deleteCategory,
} = require("../controllers/admin.controller");

router.post("/skills", authUser, authAdmin, postSkills);
router.delete("/skills/:skillId", authUser, authAdmin, deleteSkill);
router.post("/language", authUser, authAdmin, postLanguage);
router.delete("/language/:languageId", authUser, authAdmin, deleteLanguage);
router.post("/nationality", authUser, authAdmin, postNationality);
router.delete(
  "/nationality/:nationalityId",
  authUser,
  authAdmin,
  deleteNationality
);
router.post("/category", authUser, authAdmin, postCategory);
router.delete("/category/:categoryId", authUser, authAdmin, deleteCategory);

module.exports = router;
