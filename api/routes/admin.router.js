const router = require('express').Router()
const { authUser, authAdmin } = require('../utils')

const {
    postSkills,
    deleteSkill,
    // postLanguage,
    // deleteLanguage,
    // postNationality,
    // deleteNationality,
    // postCategory,
    // deleteCategory
} = require('../controllers/admin.controller')

router.post('/skills', authUser, authAdmin, postSkills)
router.delete('/skills/:skillId', authUser, authAdmin, deleteSkill)
// router.post('/language', postLanguage)
// router.delete('/language/:languageId ', deleteLanguage)
// router.post('/nationality', postNationality)
// router.delete('/nationality/:nationalityId', deleteNationality)
// router.post('/category', postCategory)
// router.delete('/category/:categoryId', deleteCategory)

module.exports = router