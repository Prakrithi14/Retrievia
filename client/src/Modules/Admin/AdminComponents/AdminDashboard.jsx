import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";


export default function AdminDashboard() {
const cards = [
{ title: "Total Users", value: 120 },
{ title: "Total Items", value: 85 },
{ title: "Claims", value: 30 },
{ title: "Sales", value: 15 }
];

return (
<Box sx={{ display: "flex" }}>

  {/* Main Content */}
  <Box
    sx={{
      flexGrow: 1,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",   // vertical center
      alignItems: "center",       // horizontal center
      background: "#f4f6f8"
    }}
  >
    <Box sx={{ width: "100%", maxWidth: "1000px" }}>
      
      {/* Title */}
      <Typography
        variant="h4"
        mb={3}
        fontWeight="bold"
        textAlign="center"
      >
        Admin Dashboard
      </Typography>

      {/* Cards */}
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
