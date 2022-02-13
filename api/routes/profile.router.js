const router = require('express').Router()
const { authUser, authCandidate } = require('../utils')

const {
    updateUserProfile,
    deleteUserProfile
} = require('../controllers/profile.controller')

router.put('/', authUser, authCandidate, updateUserProfile)
router.delete('/', authUser, authCandidate, deleteUserProfile)

router.get('/', authUser, (req, res) => {
  res.json(res.locals.user)
})

module.exports = router