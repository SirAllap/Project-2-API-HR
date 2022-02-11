const router = require('express').Router()
const { authUser, authAdmin } = require('../utils') // Authenticated Route

const {
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
    
  } = require('../controllers/users.controller')
  
router.post('/', authUser, authAdmin, createUser)
router.get('/', authUser, getAllUsers)
router.get('/:userId', authUser, getOneUser)
router.put('/:userId', authUser, updateUser)
router.delete('/:userId', authUser, deleteUser)

module.exports = router
