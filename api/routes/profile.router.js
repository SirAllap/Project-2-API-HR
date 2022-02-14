const router = require('express').Router()
const { authUser, authCandidate } = require('../utils')

const {
    updateUserProfile,
    deleteUserProfile,
    addExperience
} = require('../controllers/profile.controller')

router.put('/', authUser, authCandidate, updateUserProfile)
router.delete('/', authUser, authCandidate, deleteUserProfile)
router.post('/experience', authUser, authCandidate, addExperience)

router.get('/', authUser, (req, res) => {
  res.json(res.locals.user)
})

module.exports = router