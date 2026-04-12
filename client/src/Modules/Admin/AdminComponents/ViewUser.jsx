import React, { useEffect, useState } from "react";
import {
Box,
Typography,
Table,
TableBody,
TableCell,
TableContainer,
TableHead,
TableRow,
Paper,
Avatar,
Chip,
Button,
TextField
} from "@mui/material";
import axios from "axios";

export default function ViewUsers() {

const [users, setUsers] = useState([]);

// 🔹 Fetch users
useEffect(() => {
axios.get("http://localhost:8000/users/getuser")
.then((res) => {
// adjust if your backend uses different key
setUsers(res.data.users || res.data.allusers || []);
})
.catch((err) => console.log(err));
}, []);

const HandleDelete=async(id)=>{
    axios.delete(`http://localhost:8000/users/deleteuser/${id}`)
    .then((res) => {
       alert("User Deleted Successfully")
    })
    .catch((err) => console.log(err));
}
return (
<Box
sx={{
minHeight: "100vh",
background: "#f4f6f8",
p: 4
}}
>
{/* Title */} <Typography
     variant="h4"
     mb={3}
     fontWeight="bold"
     textAlign="center"
   >
Users Management </Typography>




  {/* Table */}
  <Box sx={{ display: "flex", justifyContent: "center" }}>
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: "1100px",
        borderRadius: "15px",
        boxShadow: 5
      }}
    >
      <Table>

        {/* Header */}
        <TableHead sx={{ background: "#4f46e5" }}>
          <TableRow>
            <TableCell sx={{ color: "white" }}>User</TableCell>
            <TableCell sx={{ color: "white" }}>Email</TableCell>
            <TableCell sx={{ color: "white" }}>Phone</TableCell>
            <TableCell sx={{ color: "white" }}>Action</TableCell>
           
          </TableRow>
        </TableHead>

        {/* Body */}
        <TableBody>
          {users.map((user, index) => (
            <TableRow
              key={user._id || index}
              sx={{
                "&:hover": {
                  background: "#f1f5f9"
                }
              }}
            >
              {/* Avatar + Name */}
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar sx={{ bgcolor: "#4f46e5" }}>
                    {user.name?.charAt(0)}
                  </Avatar>
                  {user.name}
                </Box>
              </TableCell>

              {/* Email */}
              <TableCell>{user.email}</TableCell>

              {/* Phone */}
              <TableCell>{user.phone}</TableCell>
<TableCell>
<Button
variant="contained"
color="error"
onClick={() => HandleDelete(user._id)}
>Delete</Button>
</TableCell>
            
            </TableRow>
          ))}

         
        </TableBody>

      </Table>
    </TableContainer>
  </Box>
</Box>


);
}

