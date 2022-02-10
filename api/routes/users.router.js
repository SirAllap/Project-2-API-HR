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
  router.get('/:userId', getOneUser)
  router.put('/:userId', updateUser)
  router.delete('/:userId', deleteUser)
  module.exports = router
  

/*
var jsonData = pm.response.json();
pm.environment.set("token", jsonData.token);
*/