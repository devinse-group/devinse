/*
  This file is a part of Devinse
  Author: Angel Labrada Massó
  Date: 9/4/2019 10:15am
 */

// ===============================================================
// Import Modules
// ===============================================================
const api = require('./api')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

// ===============================================================
// Settings
// ===============================================================
const config = require('../config/parameters')

// ===============================================================
// Starting Server
// ===============================================================
api.listen(config.apiPort, () => {
  console.log(`API Rest Netfy running on http://localhost:${config.apiPort}`)
})

module.exports = mongoose
