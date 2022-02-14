const router = require('express').Router()
const { authUser, authCandidate } = require('../utils')

const {
    getUserProfile,
    updateUserProfile,
    deleteUserProfile,
    addExperience
} = require('../controllers/profile.controller')


router.get('/', authUser, getUserProfile)
router.put('/', authUser, authCandidate, updateUserProfile)
router.delete('/', authUser, authCandidate, deleteUserProfile)
router.post('/experience', authUser, authCandidate, addExperience)



module.exports = router