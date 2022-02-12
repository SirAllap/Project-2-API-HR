const router = require('express').Router()

const adminRouter = require('./admin.router')
const profileRouter = require('./profile.router')
const usersRouter = require('./users.router')
const authRouter = require('./auth.router')

router.use('/admin' , adminRouter)
router.use('/users/profile', profileRouter)
router.use('/users', usersRouter)
router.use('/auth', authRouter)

module.exports = router
