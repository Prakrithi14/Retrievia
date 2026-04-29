// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Typography,
//   Paper,
//   TextField,
//   Button,
//   Tabs,
//   Tab,
//   Card,
//   CardContent,
//   Chip
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// export default function ManageProfile() {

//   const [tab, setTab] = useState(0);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//     address: ''
//   });

//   const [claims, setClaims] = useState([]);

//   const token = localStorage.getItem('UserToken');
//   const navigate = useNavigate();

//   // 🔹 Input change (UNCHANGED)
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // 🔹 View profile (UNCHANGED)
//   useEffect(() => {
//     viewprofile();
//     fetchClaims();
//   }, []);

//   const viewprofile = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:8000/users/me",
//         {
//           method: "GET",
//           headers: { "auth-token": token }
//         }
//       );

//       const details = await response.json();
//       setFormData(details.udata);

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // 🔹 Fetch claims (NEW)
//   const fetchClaims = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:8000/claims/myclaims",
//         {
//           method: "GET",
//           headers: { "auth-token": token }
//         }
//       );

//       const data = await response.json();
//       setClaims(data);

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // 🔹 Update profile (UNCHANGED)
//   const handleProfile = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:8000/users/updateuser",
//         {
//           method: "PUT",
//           body: JSON.stringify(formData),
//           headers: {
//             "auth-token": token,
//             "Content-Type": "application/json"
//           }
//         }
//       );

//       const details = await response.json();
//       alert("Profile updated successfully");
//       setFormData(details.udetails);

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // 🔹 Logout (NEW)
//   const handleLogout = () => {
//     localStorage.removeItem("UserToken");
//     alert("Logged out");
//     navigate("/login");
//   };

//   // 🔹 Status color
//   const getStatusColor = (status) => {
//     if (status === "Approved") return "success";
//     if (status === "Rejected") return "error";
//     return "warning";
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         p: 4,
//         background: "linear-gradient(135deg, #eef2ff, #fdf2f8)"
//       }}
//     >

//       {/* HEADER */}
//       <Box display="flex" justifyContent="space-between" mb={3}>
//         <Typography variant="h4" fontWeight="bold">
//           My Profile
//         </Typography>

//         <Button variant="contained" color="error" onClick={handleLogout}>
//           Logout
//         </Button>
//       </Box>

//       {/* TABS */}
//       <Tabs
//         value={tab}
//         onChange={(e, val) => setTab(val)}
//         centered
//         sx={{ mb: 3 }}
//       >
//         <Tab label="Profile" />
//         <Tab label="My Claims" />
//       </Tabs>

//       {/* PROFILE TAB */}
//       {tab === 0 && (
//         <Paper
//           elevation={10}
//           sx={{
//             maxWidth: 500,
//             mx: "auto",
//             p: 4,
//             borderRadius: "20px",
//             backdropFilter: "blur(10px)"
//           }}
//         >
//           <Typography variant="h6" mb={2} textAlign="center">
//             Update Profile
//           </Typography>

//           <TextField
//             label="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             fullWidth
//             sx={{ mb: 2 }}
//           />

//           <TextField
//             label="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             fullWidth
//             sx={{ mb: 2 }}
//           />

//           <TextField
//             label="Phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             fullWidth
//             sx={{ mb: 2 }}
//           />

//           <TextField
//             label="Address"
//             name="address"
//             multiline
//             rows={3}
//             value={formData.address}
//             onChange={handleChange}
//             fullWidth
//             sx={{ mb: 2 }}
//           />

//           <Button
//             variant="contained"
//             fullWidth
//             onClick={handleProfile}
//             sx={{
//               background: "linear-gradient(45deg, #6366f1, #8b5cf6)"
//             }}
//           >
//             Update Profile
//           </Button>
//         </Paper>
//       )}

//       {/* CLAIMS TAB */}
//       {tab === 1 && (
//         <Box
//           display="flex"
//           flexWrap="wrap"
//           gap={3}
//           justifyContent="center"
//         >
//           {claims.length === 0 ? (
//             <Typography>No claims found</Typography>
//           ) : (
//             claims.map((c) => (
//               <Card
//                 key={c._id}
//                 sx={{
//                   width: 280,
//                   borderRadius: 3,
//                   boxShadow: 3
//                 }}
//               >
//                 <CardContent>

//                   <Chip
//                     label={c.status}
//                     color={getStatusColor(c.status)}
//                     size="small"
//                     sx={{ mb: 1 }}
//                   />

//                   <Typography variant="h6">
//                     {c.itemId?.title}
//                   </Typography>

//                   <Typography>
//                     {c.itemId?.location}
//                   </Typography>

//                   <Typography sx={{ fontSize: "12px", mt: 1 }}>
//                     {c.description}
//                   </Typography>

//                 </CardContent>
//               </Card>
//             ))
//           )}
//         </Box>
//       )}

//     </Box>
//   );
// }

import React from 'react'

export default function ManageProfile() {
  return (
    <div>
      
    </div>
  )
}
