const Feedback = require("../Model/Feedback_Model");

// 🔹 Add Feedback
const addFeedback = async (req, res) => {
  try {
    const { message, rating } = req.body;

    const feedback = new Feedback({
      userId: req.user.id,
      message,
      rating
    });

    await feedback.save();

    res.status(201).json({
      message: "Feedback submitted"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error submitting feedback"
    });
  }
};

// 🔹 Get All Feedback (Admin)
const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find()
      .populate("userId", "name email")
      .sort({ createdAt: -1 });

    res.json(feedbacks);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error fetching feedback"
    });
  }
};

module.exports = { addFeedback, getAllFeedback };