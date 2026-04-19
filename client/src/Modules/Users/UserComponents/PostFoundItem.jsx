import React, { useState } from "react";
import {
Box,
Typography,
TextField,
Button,
Paper,
MenuItem
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

export default function PostFoundItem() {

const [formData, setFormData] = useState({
title: "",
description: "",
category: "",
location: "",
image: null
});
const [categories, setCategories] = useState([]);
const handleChange = (e) => {
if (e.target.name === "image") {
setFormData({ ...formData, image: e.target.files[0] });
} else {
setFormData({ ...formData, [e.target.name]: e.target.value });
}
};

const handleSubmit = async () => {
const data = new FormData();


data.append("title", formData.title);
data.append("description", formData.description);
data.append("category", formData.category);
data.append("location", formData.location);
data.append("image", formData.image);
data.append("type", "found");

try {
  await axios.post("http://localhost:8000/items/add", data);
  alert("Found item posted successfully");
} catch (error) {
  console.log(error);
  alert("Error posting item");
}


};

useEffect(() => {
  axios.get("http://localhost:8000/categories/getcategory")
    .then((res) => {
      setCategories(res.data.allcategory);   
    })
    .catch((err) => console.log(err));
}, []);
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

  {/* 🔥 Main Card */}
  <Paper
    elevation={10}
    sx={{
      p: 4,
      width: "420px",
      borderRadius: "20px",
      background: "rgba(255,255,255,0.08)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,0.2)",
      color: "white",
      zIndex: 1
    }}
  >
    <Typography variant="h5" textAlign="center" mb={3} fontWeight="bold">
      Report Found Item
    </Typography>

    {/* Inputs */}
    <TextField
      fullWidth
      label="Title"
      name="title"
      onChange={handleChange}
      sx={{ mb: 2 }}
      InputLabelProps={{ style: { color: "#cbd5f5" } }}
      InputProps={{
        style: { color: "white" }
      }}
    />

    <TextField
      fullWidth
      label="Description"
      name="description"
      multiline
      rows={3}
      onChange={handleChange}
      sx={{ mb: 2 }}
      InputLabelProps={{ style: { color: "#cbd5f5" } }}
      InputProps={{ style: { color: "white" } }}
    />

    <TextField
  select
  fullWidth
  label="Category"
  name="category"
  value={formData.category}  
  onChange={handleChange}
  InputLabelProps={{ style: { color: "#cbd5f5" } }}
      InputProps={{ style: { color: "white" } }}>
      <MenuItem value="">Select Category</MenuItem>

{categories.map((cat) => (
  <MenuItem key={cat._id} value={cat._id}>
    {cat.categoryname}
  </MenuItem>
))}
    </TextField>

    <TextField
      fullWidth
      label="Location"
      name="location"
      onChange={handleChange}
      sx={{ mb: 2 }}
      InputLabelProps={{ style: { color: "#cbd5f5" } }}
      InputProps={{ style: { color: "white" } }}
    />

    {/* Upload */}
    <Button
      variant="contained"
      component="label"
      fullWidth
      sx={{
        mb: 2,
        background: "linear-gradient(45deg, #f59e0b, #ef4444)",
        fontWeight: "bold"
      }}
    >
      Upload Image
      <input type="file" hidden name="image" onChange={handleChange} />
    </Button>

    {/* Submit */}
    <Button
      fullWidth
      variant="contained"
      onClick={handleSubmit}
      sx={{
        background: "linear-gradient(45deg, #22c55e, #16a34a)",
        fontWeight: "bold"
      }}
    >
      Submit
    </Button>

  </Paper>
</Box>


);
}
