import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Button,
  Chip
} from "@mui/material";
import axios from "axios";

export default function ManageExpiredItems() {

  const [items, setItems] = useState([]);

  // 🔹 Fetch expired items
  const fetchExpiredItems = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/items/expired"
      );

      setItems(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpiredItems();
  }, []);

  // 🔹 Move to Sale
  const handleMoveToSale = async (id) => {
    try {
      await axios.put(
        `http://localhost:8000/items/moveTosale/${id}`
      );

      alert("Item moved to sale");

      // refresh list
      fetchExpiredItems();

    } catch (error) {
      console.log(error);
      alert("Error moving item");
    }
  };

  return (
    <Box sx={{ p: 4 }}>

      {/* TITLE */}
      <Typography
        variant="h4"
        textAlign="center"
        mb={3}
        fontWeight="bold"
      >
        Expired Items Management
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          maxWidth: 1100,
          margin: "auto",
          borderRadius: 3,
          boxShadow: 3
        }}
      >

        <Table>

          {/* HEADER */}
          <TableHead>
            <TableRow
              sx={{
                background:
                  "linear-gradient(90deg, #f59e0b, #ef4444)"
              }}
            >
              <TableCell sx={{ color: "white" }}>Image</TableCell>
              <TableCell sx={{ color: "white" }}>Title</TableCell>
              <TableCell sx={{ color: "white" }}>Location</TableCell>
              <TableCell sx={{ color: "white" }}>Type</TableCell>
              <TableCell sx={{ color: "white" }}>Status</TableCell>
              <TableCell sx={{ color: "white" }}>Action</TableCell>
            </TableRow>
          </TableHead>

          {/* BODY */}
          <TableBody>
            {items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No expired items found
                </TableCell>
              </TableRow>
            ) : (
              items.map((item, index) => (
                <TableRow
                  key={item._id}
                  sx={{
                    backgroundColor:
                      index % 2 === 0 ? "#fff7ed" : "#ffedd5"
                  }}
                >

                  {/* IMAGE */}
                  <TableCell>
                    <img
                      src={`http://localhost:8000/uploads/${item.image}`}
                      alt=""
                      style={{
                        width: "80px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "6px"
                      }}
                    />
                  </TableCell>

                  {/* TITLE */}
                  <TableCell>{item.title}</TableCell>

                  {/* LOCATION */}
                  <TableCell>{item.location}</TableCell>

                  {/* TYPE */}
                  <TableCell>
                    <Chip
                      label={item.type}
                      color={
                        item.type === "lost"
                          ? "error"
                          : "success"
                      }
                      size="small"
                    />
                  </TableCell>

                  {/* STATUS */}
                  <TableCell>
                    <Chip
                      label={item.status}
                      color={
                        item.status === "sale"
                          ? "success"
                          : "warning"
                      }
                      size="small"
                    />
                  </TableCell>

                  {/* ACTION */}
                  <TableCell>
                    <Button
  variant="contained"
  color="warning"
  size="small"
  disabled={item.status === "sale" || item.type !== "found"}
  onClick={() => handleMoveToSale(item._id)}
>
  {item.type !== "found"
    ? "Not Allowed"
    : item.status === "sale"
    ? "Moved"
    : "Move to Sale"}
</Button>
                  </TableCell>

                </TableRow>
              ))
            )}
          </TableBody>

        </Table>

      </TableContainer>
    </Box>
  );
}