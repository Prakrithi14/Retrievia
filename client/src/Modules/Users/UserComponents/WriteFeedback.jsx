import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Rating
} from "@mui/material";
import axios from "axios";

export default function WriteFeedback() {

  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:8000/feedback/add",
        { message, rating },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Feedback submitted");
      setMessage("");
      setRating(0);

    } catch (error) {
      console.log(error);
      alert("Error submitting feedback");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "radial-gradient(circle at top left, #1e293b, #0f172a)",
        position: "relative",
        overflow: "hidden"
      }}
    >

      {/* 🔥 Glow Effects */}
      <Box
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "#6366f1",
          borderRadius: "50%",
          filter: "blur(120px)",
          top: "-50px",
          left: "-50px"
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "#ec4899",
          borderRadius: "50%",
          filter: "blur(120px)",
          bottom: "-50px",
          right: "-50px"
        }}
      />

      {/* 🔹 Card */}
      <Paper
        elevation={10}
        sx={{
          p: 4,
          width: "420px",
          borderRadius: "20px",
        //   background: "rgba(145, 127, 172, 0.95)",
        //   backdropFilter: "blur(20px)",
        //   border: "1px solid rgba(255,255,255,0.2)",
        //   color: "white",
          zIndex: 1,
          background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))",
backdropFilter: "blur(20px)",
border: "1px solid rgba(255,255,255,0.25)",
color: "white"
        }}
      >

        <Typography
          variant="h5"
          textAlign="center"
          mb={3}
          fontWeight="bold"
        >
          Share Your Feedback
        </Typography>

        {/* Rating */}
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Rating
            value={rating}
            onChange={(e, newValue) => setRating(newValue)}
          />
        </Box>

        {/* Message */}
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Your feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ mb: 3 }}
          InputLabelProps={{ style: { color: "#cbd5f5" } }}
          InputProps={{
            style: { color: "white" }
          }}
        />

        {/* Submit */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          sx={{
            background: "linear-gradient(45deg, #22c55e, #16a34a)",
            fontWeight: "bold",
            borderRadius: "10px"
          }}
        >
          Submit Feedback
        </Button>

      </Paper>
    </Box>
  );
}