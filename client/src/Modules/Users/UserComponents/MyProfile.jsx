// // import React, { useEffect, useState } from "react";
// // import {
// //   Box,
// //   Typography,
// //   Paper,
// //   TextField,
// //   Button,
// //   Avatar
// // } from "@mui/material";

// // export default function MyProfile() {

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     password: ""
// //   });

// //   const token = localStorage.getItem("token");

// //   // 🔹 HANDLE CHANGE
// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   // 🔹 GET PROFILE
// //   const viewprofile = async () => {
// //     try {
// //       const response = await fetch(
// //         "http://localhost:8000/users/getMe",
// //         {
// //           method: "GET",
// //           headers: {
// //             Authorization: `Bearer ${token}`   // ✅ FIXED
// //           }
// //         }
// //       );

// //       const details = await response.json();

// //       console.log("PROFILE DATA:", details);

// //       setFormData(details.udata || {});  

// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   useEffect(() => {
// //     viewprofile();
// //   }, []);

// //   // 🔹 UPDATE PROFILE
// //   const handleProfile = async () => {
// //     try {
// //       const response = await fetch(
// //         "http://localhost:8000/users/updateuser",
// //         {
// //           method: "PUT",
// //           body: JSON.stringify(formData),
// //           headers: {
// //             Authorization: `Bearer ${token}`,  // ✅ FIXED
// //             "Content-Type": "application/json"
// //           }
// //         }
// //       );

// //       const details = await response.json();

// //       alert("Profile updated successfully");

// //       setFormData(details.udata || formData); // ✅ FIXED

// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   // 🔹 LOGOUT
// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     window.location.href = "/login";
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: "100vh",
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         background: "radial-gradient(circle at top left, #1e293b, #0f172a)"
// //       }}
// //     >
// //       <Paper
// //         elevation={10}
// //         sx={{
// //           width: 420,
// //           p: 4,
// //           borderRadius: "20px",
// //           background: "#ffffff"
// //         }}
// //       >

// //         {/* Avatar */}
// //         <Box textAlign="center" mb={2}>
// //           <Avatar sx={{ width: 70, height: 70, margin: "auto" }}>
// //             {formData?.name?.charAt(0) || "U"}
// //           </Avatar>
// //         </Box>

// //         <Typography
// //           variant="h5"
// //           textAlign="center"
// //           mb={3}
// //           fontWeight="bold"
// //         >
// //           My Profile
// //         </Typography>

// //         <TextField
// //           fullWidth
// //           label="Name"
// //           name="name"
// //           value={formData?.name || ""}
// //           onChange={handleChange}
// //           sx={{ mb: 2 }}
// //         />

// //         <TextField
// //           fullWidth
// //           label="Email"
// //           name="email"
// //           value={formData?.email || ""}
// //           onChange={handleChange}
// //           sx={{ mb: 2 }}
// //         />

// //         <TextField
// //           fullWidth
// //           label="Phone"
// //           name="phone"
// //           value={formData?.phone || ""}
// //           onChange={handleChange}
// //           sx={{ mb: 2 }}
// //         />

// //         <TextField
// //           fullWidth
// //           label="Password"
// //           name="password"
// //           type="password"
// //           value={formData?.password || ""}
// //           onChange={handleChange}
// //           sx={{ mb: 3 }}
// //         />

// //         <Button
// //           fullWidth
// //           variant="contained"
// //           onClick={handleProfile}
// //           sx={{
// //             mb: 2,
// //             background: "linear-gradient(45deg, #22c55e, #16a34a)"
// //           }}
// //         >
// //           Update Profile
// //         </Button>

// //         <Button
// //           fullWidth
// //           variant="outlined"
// //           onClick={handleLogout}
// //           sx={{
// //             borderColor: "#ef4444",
// //             color: "#ef4444"
// //           }}
// //         >
// //           Logout
// //         </Button>

// //       </Paper>
// //     </Box>
// //   );
// // }

// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   Paper,
//   TextField,
//   Button,
//   Avatar
// } from "@mui/material";

// export default function MyProfile() {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: ""
//   });

//   const [claims, setClaims] = useState([]);

//   const token = localStorage.getItem("token");

//   // 🔹 HANDLE CHANGE
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // 🔹 GET PROFILE
//   const viewprofile = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:8000/users/getMe",
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       const details = await response.json();

//       console.log("PROFILE:", details);

//       setFormData(details.udata || {});

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // 🔹 GET MY CLAIMS
//   const fetchClaims = async () => {
//     try {
//       const res = await fetch(
//         "http://localhost:8000/claims/myclaims",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       const data = await res.json();

//       console.log("CLAIMS:", data);

//       setClaims(data);

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     viewprofile();
//     fetchClaims();
//   }, []);

//   // 🔹 UPDATE PROFILE
//   const handleProfile = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:8000/users/updateuser",
//         {
//           method: "PUT",
//           body: JSON.stringify(formData),
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json"
//           }
//         }
//       );

//       const details = await response.json();

//       alert("Profile updated successfully");

//       setFormData(details.udata || formData);

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // 🔹 LOGOUT
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "radial-gradient(circle at top left, #1e293b, #0f172a)",
//         p: 3
//       }}
//     >

//       {/* 🔹 PROFILE CARD */}
//       <Paper
//         sx={{
//           maxWidth: 500,
//           mx: "auto",
//           p: 4,
//           borderRadius: 4,
//           background: "rgba(255,255,255,0.1)",
//           backdropFilter: "blur(20px)",
//           border: "1px solid rgba(255,255,255,0.2)",
//           color: "white",
//           mb: 4
//         }}
//       >

//         <Box textAlign="center" mb={2}>
//           <Avatar
//             sx={{
//               width: 80,
//               height: 80,
//               margin: "auto",
//               bgcolor: "#6366f1"
//             }}
//           >
//             {formData?.name?.charAt(0) || "U"}
//           </Avatar>
//         </Box>

//         <Typography variant="h5" textAlign="center" mb={3} fontWeight="bold">
//           My Profile
//         </Typography>

//         <TextField
//           fullWidth
//           label="Name"
//           name="name"
//           value={formData?.name || ""}
//           onChange={handleChange}
//           sx={{ mb: 2 }}
//           InputLabelProps={{ style: { color: "#cbd5f5" } }}
//           InputProps={{ style: { color: "white" } }}
//         />

//         <TextField
//           fullWidth
//           label="Email"
//           name="email"
//           value={formData?.email || ""}
//           onChange={handleChange}
//           sx={{ mb: 2 }}
//           InputLabelProps={{ style: { color: "#cbd5f5" } }}
//           InputProps={{ style: { color: "white" } }}
//         />

//         <TextField
//           fullWidth
//           label="Phone"
//           name="phone"
//           value={formData?.phone || ""}
//           onChange={handleChange}
//           sx={{ mb: 2 }}
//           InputLabelProps={{ style: { color: "#cbd5f5" } }}
//           InputProps={{ style: { color: "white" } }}
//         />

//         <TextField
//           fullWidth
//           label="Password"
//           name="password"
//           type="password"
//           value={formData?.password || ""}
//           onChange={handleChange}
//           sx={{ mb: 3 }}
//           InputLabelProps={{ style: { color: "#cbd5f5" } }}
//           InputProps={{ style: { color: "white" } }}
//         />

//         <Button
//           fullWidth
//           variant="contained"
//           onClick={handleProfile}
//           sx={{
//             mb: 2,
//             background: "linear-gradient(45deg, #22c55e, #16a34a)"
//           }}
//         >
//           Update Profile
//         </Button>

//         <Button
//           fullWidth
//           variant="outlined"
//           onClick={handleLogout}
//           sx={{
//             borderColor: "#ef4444",
//             color: "#ef4444"
//           }}
//         >
//           Logout
//         </Button>

//       </Paper>

//       {/* 🔹 MY CLAIMS */}
//       <Paper
//         sx={{
//           maxWidth: 800,
//           mx: "auto",
//           p: 3,
//           borderRadius: 4,
//           background: "rgba(255,255,255,0.1)",
//           backdropFilter: "blur(20px)",
//           border: "1px solid rgba(255,255,255,0.2)",
//           color: "white"
//         }}
//       >

//         <Typography variant="h6" mb={2} fontWeight="bold">
//           My Claims
//         </Typography>

//         {claims.length === 0 ? (
//           <Typography>No claims found</Typography>
//         ) : (
//           claims.map((c) => (
//             <Box
//               key={c._id}
//               sx={{
//                 p: 2,
//                 mb: 2,
//                 borderRadius: 2,
//                 background: "#1e293b"
//               }}
//             >
//               <Typography fontWeight="bold">
//                 {c.itemId?.title}
//               </Typography>

//               <Typography variant="body2">
//                 {c.description}
//               </Typography>

//               <Typography
//                 sx={{
//                   mt: 1,
//                   color:
//                     c.status === "Approved"
//                       ? "lightgreen"
//                       : c.status === "Rejected"
//                       ? "salmon"
//                       : "orange"
//                 }}
//               >
//                 Status: {c.status}
//               </Typography>
//             </Box>
//           ))
//         )}

//       </Paper>

//     </Box>
//   );
// }

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Tabs,
  Tab,
  Paper
} from "@mui/material";

export default function MyProfile() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const [claims, setClaims] = useState([]);
  const [tab, setTab] = useState(0);

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const viewprofile = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/users/getMe",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const details = await response.json();
      setFormData(details.udata || {});
    } catch (error) {
      console.log(error);
    }
  };

  const fetchClaims = async () => {
    try {
      const res = await fetch(
        "http://localhost:8000/claims/myclaims",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await res.json();
      setClaims(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    viewprofile();
    fetchClaims();
  }, []);

  const handleProfile = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/users/updateuser",
        {
          method: "PUT",
          body: JSON.stringify(formData),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      const details = await response.json();
      alert("Profile updated successfully");
      setFormData(details.udata || formData);

    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top left, #1e293b, #0f172a)",
        p: 3,
        color: "white"
      }}
    >

      {/* 🔹 Header */}
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Avatar sx={{ width: 80, height: 80, margin: "auto", bgcolor: "#6366f1" }}>
          {formData?.name?.charAt(0) || "U"}
        </Avatar>
        <Typography variant="h5" mt={1}>
          {formData.name}
        </Typography>
      </Box>

      {/* 🔹 Tabs */}
      <Tabs
        value={tab}
        onChange={(e, newValue) => setTab(newValue)}
        centered
        textColor="inherit"
        TabIndicatorProps={{ style: { backgroundColor: "#22c55e" } }}
      >
        <Tab label="Profile" />
        <Tab label="My Claims" />
      </Tabs>

      {/* 🔹 PROFILE TAB */}
      {tab === 0 && (
        <Box sx={{ maxWidth: 500, mx: "auto", mt: 3 }}>

          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData?.name || ""}
            onChange={handleChange}
            sx={{ mb: 2 }}
            InputLabelProps={{ style: { color: "#cbd5f5" } }}
            InputProps={{ style: { color: "white" } }}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData?.email || ""}
            onChange={handleChange}
            sx={{ mb: 2 }}
            InputLabelProps={{ style: { color: "#cbd5f5" } }}
            InputProps={{ style: { color: "white" } }}
          />

          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={formData?.phone || ""}
            onChange={handleChange}
            sx={{ mb: 2 }}
            InputLabelProps={{ style: { color: "#cbd5f5" } }}
            InputProps={{ style: { color: "white" } }}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData?.password || ""}
            onChange={handleChange}
            sx={{ mb: 3 }}
            InputLabelProps={{ style: { color: "#cbd5f5" } }}
            InputProps={{ style: { color: "white" } }}
          />

          <Button
            fullWidth
            variant="contained"
            onClick={handleProfile}
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
        </Box>
      )}

      {/* 🔹 CLAIMS TAB */}
      {tab === 1 && (
        <Box sx={{ maxWidth: 800, mx: "auto", mt: 3 }}>

          {claims.length === 0 ? (
            <Typography>No claims found</Typography>
          ) : (
            claims.map((c) => (
              <Paper
                key={c._id}
                sx={{
                  p: 2,
                  mb: 2,
                  borderRadius: 3,
                  background: "#1e293b",
                  color: "white"
                }}
              >
                <Typography fontWeight="bold">
                  {c.itemId?.title}
                </Typography>

                <Typography variant="body2">
                  {c.description}
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    color:
                      c.status === "Approved"
                        ? "#22c55e"
                        : c.status === "Rejected"
                        ? "#ef4444"
                        : "#facc15"
                  }}
                >
                  Status: {c.status}
                </Typography>
              </Paper>
            ))
          )}

        </Box>
      )}

    </Box>
  );
}