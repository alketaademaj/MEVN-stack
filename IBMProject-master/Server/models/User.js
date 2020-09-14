const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    min: 6,
  },
  password: {
    type: String,
    require: true,
    min: 6,
    max: 1024,
  },
  email: {
    type: String,
    require: true,
    min: 8,
    max: 255,
  },
  CreatedDate: {
    type: String,
    default: Date.now
  }
});

module.exports = mongoose.model('Users', UserSchema);