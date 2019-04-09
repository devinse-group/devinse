/*
  This file is a part of Devinse
  Author: Angel Labrada Massó
  Date: 9/4/2019 10:37am
 */

// ===============================================================
// Import Modules
// ===============================================================
const express = require('express')
const router = express.Router()
const { SignUp } = require('../controllers/user')
const passport = require('../../server/middlewares/passport')

// ===============================================================
// Routes
// ===============================================================
// Route SignIn
router.post('/signin',
  function (req, res, next) {
    console.log('routes/user.js, login, req.body: ')
    console.log(req.body)
    next()
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('logged in', req.user)
    var userInfo = {
      username: req.user.username
    }
    res.send(userInfo)
  }
)

// Route Dashboard
router.get('/admin/dashboard', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
    res.json({ user: req.user })
  } else {
    res.json({ user: null })
  }
})

router.post('/signup', SignUp) // Route SignUp

// Route Logout
router.post('/logout', (req, res) => {
  if (req.user) {
    req.logout()
    res.send({ msg: 'logging out' })
  } else {
    res.send({ msg: 'no user to log out' })
  }
})

module.exports = router
