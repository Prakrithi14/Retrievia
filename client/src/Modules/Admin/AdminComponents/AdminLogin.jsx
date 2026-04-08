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

export default function AdminLogin() {

const [login,setLogin]=useState({
  email:'',
  password:'',
})
const handleChange=(event)=>{
   console.log({...login,[event.target.name]:event.target.value })
   setLogin({...login,[event.target.name]:event.target.value })
}
  const handleLogin=()=>{
    console.log("Login Details:",login)
        axios.post('http://localhost:8000/admins/loginadmin',login)
        .then((res)=>{
            console.log(res)
            if(res.data.success){
            //localStorage.setItem('UserToken',res.data.token)
            alert("Login successful")
            //navigate('/about')
            }
            else{
                alert("Login Unsuccessful")
            }
        })
        .catch((error)=>{
            console.log(error)
            alert("Login Failed")
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
        Login
      </Typography>

      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        margin="normal"
        InputLabelProps={{
          style: { color: "white" }
        }}
        InputProps={{
          style: { color: "white" }
        }}
        name="email"
        onChange={handleChange}
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        InputLabelProps={{
          style: { color: "white" }
        }}
        InputProps={{
          style: { color: "white" }
        }}
        name="password"
        onChange={handleChange}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 2,
          background: "linear-gradient(45deg, #ff6ec4, #7873f5)",
          fontWeight: "bold",
          "&:hover": {
            background: "linear-gradient(45deg, #5aba2a, #7873f5)",
          }
        }}
        onClick={handleLogin}
      >
        Login
      </Button>
      <a href="/register" style={{ display: "block", marginTop: "15px", textAlign: "center", color: "white", textDecoration: "none" }}>
        Don't have an account? Register
      </a>
    </Paper>
  </Box>
</>


);
}
