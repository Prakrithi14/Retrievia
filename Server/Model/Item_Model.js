const mongoose = require('mongoose');

const itemschema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String },

  type: { 
    type: String, 
    required: true   
  },

  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users' 
  },

  status: { 
    type: String, 
    default: "pending"   
  }

}, { timestamps: true });

module.exports = mongoose.model('items', itemschema);