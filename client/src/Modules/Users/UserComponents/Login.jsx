import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value
    });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/users/loginUser",
        login
      );

      console.log("LOGIN RESPONSE:", res.data);

      // ✅ check token (not success)
      if (res.data.token) {
        // ✅ store token properly
        localStorage.setItem("token", res.data.token);

        alert("Login successful");
        navigate("/Home");
      } else {
        alert("Login failed");
      }

    } catch (error) {
      console.log("LOGIN ERROR:", error);
      alert("Login failed");
    }
  };

  return (
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
          p: 4,
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
          name="email"
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{ style: { color: "white" } }}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{ style: { color: "white" } }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            background: "linear-gradient(45deg, #ff6ec4, #7873f5)",
            fontWeight: "bold",
            "&:hover": {
              background: "linear-gradient(45deg, #5aba2a, #7873f5)"
            }
          }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <a
          href="/register"
          style={{
            display: "block",
            marginTop: "15px",
            textAlign: "center",
            color: "white",
            textDecoration: "none"
          }}
        >
          Don't have an account? Register
        </a>
      </Paper>
    </Box>
  );
}