import React, { useState } from "react";
import {
Box,
Typography,
TextField,
Button,
Paper
} from "@mui/material";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function ClaimItem() {

const { id } = useParams();
const navigate = useNavigate();

const [formData, setFormData] = useState({
description: "",
image: null
});

const handleChange = (e) => {
if (e.target.name === "image") {
setFormData({ ...formData, image: e.target.files[0] });
} else {
setFormData({ ...formData, [e.target.name]: e.target.value });
}
};

const handleSubmit = async () => {
try {
const data = new FormData();


  data.append("itemId", id);
  data.append("description", formData.description);
  data.append("image", formData.image);
console.log("TOKEN:", localStorage.getItem("token"));
 await axios.post(
  "http://localhost:8000/claims/createclaim",
  data,
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }
);
  alert("Claim submitted successfully");
//   navigate("/");

} catch (error) {
  console.log(error);
  alert("Error submitting claim");
}


};

return (
<Box
sx={{
minHeight: "100vh",
display: "flex",
justifyContent: "center",
alignItems: "center",
background: "linear-gradient(135deg, #eef2ff, #fdf2f8)",
px: 2
}}
>


  <Paper
    elevation={10}
    sx={{
      p: 4,
      width: "100%",
      maxWidth: 420,
      borderRadius: "20px",
      background: "rgba(255,255,255,0.6)",
      backdropFilter: "blur(15px)",
      border: "1px solid rgba(255,255,255,0.3)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.1)"
    }}
  >
    {/* Title */}
    <Typography
      variant="h5"
      textAlign="center"
      mb={3}
      fontWeight="bold"
    >
      Claim Item
    </Typography>

    {/* Description */}
    <TextField
      fullWidth
      label="Describe your item (color, contents, etc.)"
      name="description"
      multiline
      rows={4}
      onChange={handleChange}
      sx={{ mb: 2 }}
    />

    {/* Upload Button */}
    <Button
      variant="contained"
      component="label"
      fullWidth
      sx={{
        mb: 2,
        borderRadius: "10px",
        textTransform: "none",
        background: "linear-gradient(45deg, #6366f1, #8b5cf6)"
      }}
    >
      Upload Proof Image
      <input
        type="file"
        hidden
        name="image"
        onChange={handleChange}
      />
    </Button>

    {/* Submit */}
    <Button
      fullWidth
      variant="contained"
      onClick={handleSubmit}
      sx={{
        borderRadius: "10px",
        textTransform: "none",
        background: "linear-gradient(45deg, #22c55e, #16a34a)",
        fontWeight: "bold"
      }}
    >
      Submit Claim
    </Button>

    {/* Small note */}
    <Typography
      sx={{
        mt: 2,
        fontSize: "12px",
        color: "gray",
        textAlign: "center"
      }}
    >
      Provide accurate details to help verify your claim
    </Typography>

  </Paper>

</Box>


);
}
