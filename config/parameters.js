/*
  This file is a part of Devinse
  Author: Angel Labrada Massó
  Date: 9/4/2019 10:17am
 */

// ===============================================================
// Global Settings
// ===============================================================
module.exports = {
  dbUri: process.env.MONGODB || 'mongodb://localhost:27017/netfy', // 27017 is the default mongoDB port
  apiPort: process.env.PORT || 4000,
  SECRET_TOKEN: 'NetfyPass'
}
