const router = require('express').Router()

const {
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
    
  } = require('../controllers/users.controller')
  
  router.post('/', createUser)
  router.get('/', getAllUsers)
  router.get('/:userId', getOneUser)
  router.put('/:userId', updateUser)
  router.delete('/:userId', deleteUser)
  module.exports = router
  