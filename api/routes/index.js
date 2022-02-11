const router = require('express').Router()

const profileRouter = require('./profile.router')
const usersRouter = require('./users.router')
const authRouter = require('./auth.router')


router.use('/users/profile', profileRouter)
router.use('/users', usersRouter)
router.use('/auth', authRouter)

module.exports = router
