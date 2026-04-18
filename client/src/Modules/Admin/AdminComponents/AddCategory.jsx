import { Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

export default function AddCategory() {

    const [category,setCategory]=useState({
        categoryname:"",
        categorydescription:""
    })
    const handleChange=(e)=>{
        setCategory({...category, [e.target.name]:e.target.value})
        console.log({...category, [e.target.name]:e.target.value})
    }
    const handleadd=()=>{
      console.log(category)
      axios.post('http://localhost:8000/categories/addcategory',category)
      .then((res)=>{
        console.log("category details:",res.data.cdata)
        alert("category added successfully")
      })
      .catch((error)=>{
          console.log(error)
      })
    }
  return (
    <div
  style={{
    background: "linear-gradient(135deg, #eef2ff, #fdf2f8)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}
>
  <Paper
    elevation={10}
    style={{
      width: "500px",
      padding: "30px",
      borderRadius: "20px",
      backdropFilter: "blur(10px)",
      background: "rgba(255,255,255,0.9)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.1)"
    }}
  >
    <Typography
      variant="h4"
      style={{
        fontFamily: "math",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "20px",
        color: "#4f46e5"
      }}
    >
      Add Category
    </Typography>

    <TextField
      variant="outlined"
      label="Category Name"
      name="categoryname"
      type="text"
      onChange={handleChange}
      fullWidth
      style={{ marginBottom: "15px" }}
    />

    <TextField
      variant="outlined"
      label="Category Description"
      name="categorydescription"
      multiline
      rows={4}
      fullWidth
      style={{ marginBottom: "20px" }}
      onChange={handleChange}
    />

    <Button
      variant="contained"
      fullWidth
     
      style={{
        background: "linear-gradient(45deg, #6366f1, #ec4899)",
        fontWeight: "bold",
        padding: "10px",
        borderRadius: "10px"
      }}
      onClick={handleadd}
    >
      Add
    </Button>
  </Paper>
</div>
  )
}
