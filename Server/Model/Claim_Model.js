const mongoose = require("mongoose");

const claimSchema = new mongoose.Schema(
{
itemId: {
type: mongoose.Schema.Types.ObjectId,
ref: "items",
required: true
},


ownerId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "users",
  required: true
},

claimantId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "users",
  required: true
},

description: {
  type: String,
  required: true
},

image: {
  type: String, // stores filename from multer
  required: true
},

status: {
  type: String,
  enum: ["Pending", "Approved", "Rejected"],
  default: "Pending"
}


},
{
timestamps: true // createdAt, updatedAt
}
);

module.exports = mongoose.model("claims", claimSchema);
