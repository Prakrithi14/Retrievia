import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Avatar,
  CircularProgress
} from "@mui/material";
import axios from "axios";

export default function MyProfile() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  // 🔹 GET PROFILE
  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/users/getMe",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log("PROFILE:", res.data); // 🔥 debug

      setUser(res.data.user || {}); // ✅ SAFE

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // 🔹 HANDLE CHANGE
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // 🔹 UPDATE PROFILE
  const handleUpdate = async () => {
    try {
      await axios.put(
        "http://localhost:8000/users/updateuser",
        user,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Profile updated");

    } catch (error) {
      console.log(error);
      alert("Error updating profile");
    }
  };

  // 🔹 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  // 🔥 LOADING UI
  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#0f172a"
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "radial-gradient(circle at top left, #1e293b, #0f172a)"
      }}
    >
      <Paper
        sx={{
          p: 4,
          width: 420,
          borderRadius: "20px",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "white"
        }}
      >
        <Box textAlign="center" mb={2}>
          <Avatar
            sx={{
              width: 70,
              height: 70,
              margin: "auto",
              bgcolor: "#6366f1"
            }}
          >
            {user?.name?.charAt(0) || "U"}
          </Avatar>
        </Box>

        <Typography variant="h5" textAlign="center" mb={3} fontWeight="bold">
          My Profile
        </Typography>

        <TextField
          fullWidth
          label="Name"
          name="name"
          value={user?.name || ""}
          onChange={handleChange}
          sx={{ mb: 2 }}
          InputLabelProps={{ style: { color: "#cbd5f5" } }}
          InputProps={{ style: { color: "white" } }}
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          value={user?.email || ""}
          onChange={handleChange}
          sx={{ mb: 2 }}
          InputLabelProps={{ style: { color: "#cbd5f5" } }}
          InputProps={{ style: { color: "white" } }}
        />

        <TextField
          fullWidth
          label="Phone"
          name="phone"
          value={user?.phone || ""}
          onChange={handleChange}
          sx={{ mb: 2 }}
          InputLabelProps={{ style: { color: "#cbd5f5" } }}
          InputProps={{ style: { color: "white" } }}
        />

        <TextField
          fullWidth
          label="Address"
          name="address"
          multiline
          rows={3}
          value={user?.address || ""}
          onChange={handleChange}
          sx={{ mb: 3 }}
          InputLabelProps={{ style: { color: "#cbd5f5" } }}
          InputProps={{ style: { color: "white" } }}
        />

        <Button
          fullWidth
          variant="contained"
          onClick={handleUpdate}
          sx={{
            mb: 2,
            background: "linear-gradient(45deg, #22c55e, #16a34a)"
          }}
        >
          Update Profile
        </Button>

        <Button
          fullWidth
          variant="outlined"
          onClick={handleLogout}
          sx={{
            borderColor: "#ef4444",
            color: "#ef4444"
          }}
        >
          Logout
        </Button>

      </Paper>
    </Box>
  );
}