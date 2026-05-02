import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Rating,
  Avatar
} from "@mui/material";
import axios from "axios";

export default function ViewFeedback() {

  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedback = async () => {
    const res = await axios.get(
      "http://localhost:8000/feedback/all"
    );
    setFeedbacks(res.data);
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #eef2ff, #fdf2f8)",
        p: 3
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
        textAlign="center"
      >
        User Feedback
      </Typography>

      {/* Feedback List */}
      <Box sx={{ width: "100%", maxWidth: 700 }}>

        {feedbacks.map((f) => (
          <Paper
            key={f._id}
            sx={{
              p: 3,
              mb: 3,
              borderRadius: "16px",
              boxShadow: 3,
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.02)"
              }
            }}
          >
            {/* User Info */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Avatar sx={{ mr: 2 }}>
                {f.userId?.name?.charAt(0)}
              </Avatar>

              <Box>
                <Typography fontWeight="bold">
                  {f.userId?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {f.userId?.email}
                </Typography>
              </Box>
            </Box>

            {/* Rating */}
            <Rating value={f.rating} readOnly sx={{ mb: 1 }} />

            {/* Message */}
            <Typography color="text.primary">
              {f.message}
            </Typography>

          </Paper>
        ))}

      </Box>
    </Box>
  );
}