const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
});

// ✅ prevents OverwriteModelError
module.exports = mongoose.models.users || mongoose.model('users', userschema);