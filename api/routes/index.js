const router = require('express').Router()

const adminRouter = require('./admin.router')
const profileRouter = require('./profile.router')
const usersRouter = require('./users.router')
const authRouter = require('./auth.router')
const jobOfferRouter = require('./jobOffer.router')

router.use('/admin' , adminRouter)
router.use('/users/profile', profileRouter)
router.use('/users', usersRouter)
router.use('/auth', authRouter)
router.use('/job-offer', jobOfferRouter)

module.exports = router
