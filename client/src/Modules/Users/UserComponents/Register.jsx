import React from "react";
import {
Box,
Typography,
TextField,
Button,
Paper
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function Register() {

 const [userdata,setUserdata]=useState({
  name:'',
  email:'',
  phone:'',
  password:''
 })

 const handleChange=(event)=>{
      console.log({...userdata,[event.target.name]:event.target.value})
     setUserdata({...userdata,[event.target.name]:event.target.value})
 }
  const handleRegister=()=>{
      console.log("User details:",userdata)
       axios.post('http://localhost:8000/users/registeruser',userdata)
      .then((res)=>{
        console.log("Regsitered User:",res.data)
        alert("User Registered Successfully")
      })
      .catch((error)=>{
        console.log(error)
      })
  }
return (
<>
  <Box
    sx={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      px:2,
      background: "linear-gradient(135deg, #4f46e5, #195661, #ec4899)"
    }}
  >
    <Paper
      elevation={10}
      sx={{
        padding: 4,
        width: "350px",
        borderRadius: "15px",
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(15px)",
        border: "1px solid rgba(255,255,255,0.3)",
        color: "white"
      }}
    >
      <Typography
        variant="h5"
        mb={2}
        textAlign="center"
        fontWeight="bold"
      >
        Register
      </Typography>
      <TextField
        fullWidth
        label="Name"
        name="name"
        type="text"
        variant="outlined"
        margin="normal"
        InputLabelProps={{
          style: { color: "white" }
        }}
        InputProps={{
          style: { color: "white" }
        }}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Email"
        type="email"
        name="email"
        variant="outlined"
        margin="normal"
        InputLabelProps={{
          style: { color: "white" }
        }}
        InputProps={{
          style: { color: "white" }
        }}
        onChange={handleChange}
      />
        <TextField
        fullWidth
        label="Phone"
        type="Number"
        name="phone"
        variant="outlined"
        margin="normal"
        InputLabelProps={{
          style: { color: "white" }
        }}
        InputProps={{
          style: { color: "white" }
        }}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        name="password"
        variant="outlined"
        margin="normal"
        InputLabelProps={{
          style: { color: "white" }
        }}
        InputProps={{
          style: { color: "white" }
        }}
        onChange={handleChange}
      />

      <Button
        fullWidth
        variant="contained"
        onClick={handleRegister}
        sx={{
          mt: 2,
          background: "linear-gradient(45deg, #ff6ec4, #7873f5)",
          fontWeight: "bold",
          "&:hover": {
            background: "linear-gradient(45deg, #5aba2a, #7873f5)",
          }
        }}
       
      >
        Regsiter
      </Button>
      <a href="/login" style={{ display: "block", marginTop: "15px", textAlign: "center", color: "white", textDecoration: "none" }}>
        Already have an account? Login
      </a>
    </Paper>
  </Box>
</>


);
}
