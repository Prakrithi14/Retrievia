import React from "react";
import TopBar from "./TopBar";
import { Box, Typography } from "@mui/material";
import { Card, CardMedia, CardContent, Button } from "@mui/material";

export default function Home() {
  const cardStyle = {
  width: 220,
  textAlign: "center",
  padding: 2,
  borderRadius: "15px",
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.3)",
  color: "white"
};

const btnStyle = {
  mt: 2,
  background: "linear-gradient(45deg, #ff6ec4, #7873f5)",
  color: "white"
};
  
  return (
    <>
      

      <Box
        sx={{
          minHeight: "100vh",
          px: 2, // padding left-right (important for mobile)
          py: 3, // padding top-bottom
          background: "linear-gradient(135deg, #4f46e5, #9333ea, #ec4899)"
        }}
      >
        <Typography
          variant="h4"
          color="white"
          mb={3}
          fontWeight="bold"
        >
          Lost & Found Items
        </Typography>
        <Box
  sx={{
    display: "flex",
    flexWrap: "wrap",
    gap: 3,
    justifyContent: "center",
    mt: 4
  }}
>

  <Card sx={cardStyle}>
    <CardContent>
      <Typography variant="h6">Report Lost</Typography>
      <Button sx={btnStyle}>Add Lost Item</Button>
    </CardContent>
  </Card>

  <Card sx={cardStyle}>
    <CardContent>
      <Typography variant="h6">Found Something?</Typography>
      <Button sx={btnStyle}>Add Found Item</Button>
    </CardContent>
  </Card>

  <Card sx={cardStyle}>
    <CardContent>
      <Typography variant="h6">Browse Items</Typography>
      <Button sx={btnStyle}>View Items</Button>
    </CardContent>
  </Card>

  <Card sx={cardStyle}>
    <CardContent>
      <Typography variant="h6">Sale / Adoption</Typography>
      <Button sx={btnStyle}>Explore</Button>
    </CardContent>
  </Card>

</Box>
      </Box>
    </>
  );
}