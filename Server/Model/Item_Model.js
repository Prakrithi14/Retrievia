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

//  status: {
//   type: String,
//   enum: ["pending", "claimed"],
//   default: "pending"
// }
status: {
  type: String,
  enum: [
    "Pending",
    "Approved",
    "Rejected",
    "Completed",
    "claimed",
    "sale",
    "adoption",
    "sold"
  ],
  default: "Pending"
}
}, { timestamps: true });

module.exports = mongoose.model('items', itemschema);