import React from "react";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button
} from "@mui/material";

// 👉 import your image
import heroImg from "../../../assets/hero.png"

export default function Home() {
  const actions = [
    { title: "Report Lost", desc: "Lost something? Report it here" },
    { title: "Found Item", desc: "Help return lost items" },
    { title: "Browse Items", desc: "Search lost & found items" },
    { title: "Sale / Adoption", desc: "Unclaimed items available" }
  ];

  const categories = ["Bags", "Electronics", "Pets", "Documents", "Others"];

  return (
    <>
  
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          color: "white"
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)"
          }}
        />

        {/* Text */}
        <Box sx={{ position: "relative", textAlign: "center" }}>
          <Typography variant="h3" fontWeight="bold">
            Welcome to Retrievia
          </Typography>
          <Typography variant="h6" mt={1}>
            Reconnect with what you've lost
          </Typography>
        </Box>
      </Box>

      {/* ACTION CARDS */}
      <Box sx={{ p: 4 }}>
        <Typography variant="h5" mb={3} fontWeight="bold">
          Get Started
        </Typography>

        <Grid container spacing={3}>
          {actions.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  borderRadius: "15px",
                  p: 2,
                  transition: "0.3s",
                  boxShadow: 3,
                  "&:hover": {
                    transform: "scale(1.05)"
                  }
                }}
              >
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" mb={2}>
                    {item.desc}
                  </Typography>

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(45deg, #ff6ec4, #7873f5)"
                    }}
                  >
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CATEGORIES */}
      <Box sx={{ p: 4 }}>
        <Typography variant="h5" mb={3} fontWeight="bold">
          Categories
        </Typography>

        <Grid container spacing={3}>
          {categories.map((cat, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Box
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: "12px",
                  background: "#f4f6f8",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    background: "#e0e7ff"
                  }
                }}
              >
                <Typography fontWeight="bold">{cat}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}