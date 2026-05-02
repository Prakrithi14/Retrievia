const express = require("express");
const router = express.Router();

const {
  addFeedback,
  getAllFeedback
} = require("../Controller/Feedback_Controller");

const authuser = require("../Middleware/auth");

// 🔹 User
router.post("/add", authuser, addFeedback);

// 🔹 Admin
router.get("/all", getAllFeedback);

module.exports = router;