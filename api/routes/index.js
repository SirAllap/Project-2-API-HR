const router = require('express').Router()

const usersRouter = require('./users.router')
const authRouter = require('./auth.router')

router.use('/users', usersRouter)
router.use('/auth', authRouter)

module.exports = router
