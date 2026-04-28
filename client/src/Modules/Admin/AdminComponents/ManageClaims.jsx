import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Chip,
  Snackbar,
  Alert
} from "@mui/material";
import axios from "axios";

export default function ManageClaims() {
  const [claims, setClaims] = useState([]);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  // 🔹 Fetch claims
  const fetchClaims = async () => {
    try {
      const res = await axios.get("http://localhost:8000/claims/allclaims");
      setClaims(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchClaims();
  }, []);

  // 🔹 Update status
  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:8000/claims/status/${id}`,
        { status }
      );

      // ✅ instant UI update
      setClaims((prev) =>
        prev.map((c) =>
          c._id === id ? { ...c, status } : c
        )
      );

      // ✅ show message
      setMsg(`Claim ${status}`);
      setOpen(true);

    } catch (error) {
      console.log(error);
    }
  };

  // 🔹 Status color
  const getStatusColor = (status) => {
    if (status === "Approved") return "success";
    if (status === "Rejected") return "error";
    return "warning";
  };

  return (
    <Box sx={{ p: 4 }}>

      {/* 🔥 Title */}
      <Typography
        variant="h4"
        textAlign="center"
        mb={3}
        fontWeight="bold"
      >
        Claims Management
      </Typography>

      {/* 🔥 Table */}
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: 1500,
          margin: "auto",
          borderRadius: 3,
          boxShadow: 3
        }}
      >
        <Table>

          {/* Header */}
          <TableHead>
            <TableRow
              sx={{
                background: "linear-gradient(90deg, #4f46e5, #7c3aed)"
              }}
            >
              <TableCell sx={{ color: "white" }}>Item</TableCell>
              <TableCell sx={{ color: "white" }}>User</TableCell>
              <TableCell sx={{ color: "white" }}>Description</TableCell>
              <TableCell sx={{ color: "white" }}>Proof</TableCell>
              <TableCell sx={{ color: "white" }}>Status</TableCell>
              <TableCell sx={{ color: "white" }}>Action</TableCell>
            </TableRow>
          </TableHead>

          {/* Body */}
          <TableBody>
            {claims.map((c, index) => (
              <TableRow
                key={c._id}
                sx={{
                  backgroundColor:
                    index % 2 === 0 ? "#f9fafb" : "#e5e7eb"
                }}
              >

                {/* Item */}
                <TableCell>
                  {c.itemId?.title || "N/A"}
                </TableCell>

                {/* User */}
                <TableCell>
                  {c.claimantId?.name}
                  <br />
                  <span style={{ fontSize: "12px", color: "gray" }}>
                    {c.claimantId?.email}
                  </span>
                </TableCell>

                {/* Description */}
                <TableCell>{c.description}</TableCell>

                {/* Image */}
                <TableCell>
                  <img
                    src={`http://localhost:8000/uploads/${c.image}`}
                    alt=""
                    style={{
                      width: "80px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "6px"
                    }}
                  />
                </TableCell>

                {/* Status */}
                <TableCell>
                  <Chip
                    label={c.status}
                    color={getStatusColor(c.status)}
                    size="small"
                  />
                </TableCell>

                {/* Actions */}
                <TableCell>
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    sx={{ mr: 1 }}
                    disabled={c.status !== "Pending"}
                    onClick={() =>
                      updateStatus(c._id, "Approved")
                    }
                  >
                    Approve
                  </Button>

                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    disabled={c.status !== "Pending"}
                    onClick={() =>
                      updateStatus(c._id, "Rejected")
                    }
                  >
                    Reject
                  </Button>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

      {/* 🔥 Snackbar Notification */}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="success" variant="filled">
          {msg}
        </Alert>
      </Snackbar>

    </Box>
  );
}