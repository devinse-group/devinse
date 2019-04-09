/*
  This file is a part of Devinse
  Author: Angel Labrada Massó
  Date: 9/4/2019 10:34am
 */

// ===============================================================
// Import Modules
// ===============================================================
const User = require('../../server/models/user')
const LocalStrategy = require('passport-local').Strategy

// ===============================================================
// Create a new Strategy
// ===============================================================
const strategy = new LocalStrategy(
  {
    usernameField: 'username' // not necessary, DEFAULT
  },
  function (username, password, done) {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err)
      }
      if (!user) {
        return done(null, false, { message: 'Not User found.' })
      }
      if (!user.checkPassword(password)) {
        return done(null, false, { message: 'Incorrect password' })
      }
      return done(null, user)
    })
  }
)

module.exports = strategy
