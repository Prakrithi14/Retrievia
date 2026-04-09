import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import axios from "axios";

export default function AdminDashboard() {

  // 🔹 State to store backend data
  const [data, setData] = useState({
    users: 0,
    items: 0,
    claims: 0,
    sales: 0
  });

  // 🔹 Fetch data from backend
  useEffect(() => {
    axios.get("http://localhost:8000/admins/dashboard")
      .then((res) => {
        if (res.data.success) {
          setData(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 🔹 Cards using dynamic values
  const cards = [
    { title: "Total Users", value: data.users },
    { title: "Total Items", value: data.items },
    { title: "Claims", value: data.claims },
    { title: "Sales", value: data.sales }
  ];

  return (
    <Box sx={{ display: "flex" }}>

      <Box
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#f4f6f8"
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "1000px" }}>

          <Typography
            variant="h4"
            mb={3}
            fontWeight="bold"
            textAlign="center"
          >
            Admin Dashboard
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {cards.map((card, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={5}
                  sx={{
                    p: 3,
                    borderRadius: "15px",
                    textAlign: "center",
                    background: "linear-gradient(135deg, #4f46e5, #9333ea)",
                    color: "white",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.05)"
                    }
                  }}
                >
                  <Typography variant="h6">{card.title}</Typography>
                  <Typography variant="h4" fontWeight="bold">
                    {card.value}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

        </Box>
      </Box>
    </Box>
  );
}