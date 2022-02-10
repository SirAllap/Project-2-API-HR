const bcrypt = require('bcrypt') // require to encrypt passwords
const jwt = require('jsonwebtoken') // required to generate a token

const UserModel = require('../models/users.model') // bring user model

async function login (req, res) {
    try {
      const user = await UserModel.findOne({ email: req.body.email })
      if (!user) {
        res.status(400).send('Email or password incorrect')
        return
      }
  
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) throw new Error(err)
  
        if (!result) {
          return res.json({ error: 'Email or password incorrect' })
        }
  
        const token = jwt.sign({ email: user.email }, process.env.SECRET, { expiresIn: '1h' })
        // create a token with the user email
  
        res.status(200).json({ email: user.email, token })
      })
    } catch (error) {
      res.status(500).send('Error logging user')
      throw new Error(`Error logging user: ${error}`)
    }
  }
  
  module.exports = {
    login
  }
  