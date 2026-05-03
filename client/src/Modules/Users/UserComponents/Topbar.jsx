// // import React, { useEffect, useState } from 'react'
// // import {
// //   AppBar,
// //   Toolbar,
// //   Button,
// //   Typography,
// //   InputBase,
// //   Box,
// //   Menu,
// //   MenuItem,
// //   IconButton
// // } from '@mui/material'
// // import SearchIcon from "@mui/icons-material/Search"
// // import AccountCircleIcon from "@mui/icons-material/AccountCircle"
// // import { useNavigate } from 'react-router-dom'
// // import logo from '../../../assets/logo2.png'

// // export default function Topbar() {

// //   const navigate = useNavigate()

// //   const [anchorEl, setAnchorEl] = useState(null)
// //   const [isLoggedIn, setIsLoggedIn] = useState(false)

// //   // 🔥 check token dynamically
// //   useEffect(() => {
// //     const token = localStorage.getItem("token")
// //     setIsLoggedIn(!!token)
// //   }, [])

// //   const handleMenuOpen = (e) => {
// //     setAnchorEl(e.currentTarget)
// //   }

// //   const handleMenuClose = () => {
// //     setAnchorEl(null)
// //   }

// //   const handleLogout = () => {
// //     localStorage.removeItem("token")
// //     setIsLoggedIn(false)
// //     navigate("/login")
// //     handleMenuClose()
// //   }

// //   const handleProfile = () => {
// //     navigate("/MyProfile")
// //     handleMenuClose()
// //   }

// //   return (
// //     <div>
// //       <AppBar
// //         position='static'
// //         sx={{
// //           background: "linear-gradient(135deg, #4f46e5, #9333ea, #ec4899)"
// //         }}
// //       >
// //         <Toolbar sx={{ height: '100px' }}>

// //           {/* 🔹 Logo */}
// //           <Box
// //             component="img"
// //             src={logo}
// //             alt="Logo"
// //             onClick={() => navigate("/")}
// //             sx={{
// //               height: "70px",
// //               cursor: "pointer",
// //               borderRadius: "50px"
// //             }}
// //           />

// //           <Typography
// //             variant='h5'
// //             sx={{
// //               flexGrow: 1,
// //               ml: 2,
// //               fontFamily: "poppins",
// //               fontWeight: "bold",
// //               color: "white"
// //             }}
// //           >
// //             RETRIEVIA
// //           </Typography>

// //           {/* 🔹 Right Section */}
// //           <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

// //             {/* Home */}
// //             <Button
// //               color='inherit'
// //               onClick={() => navigate("/")}
// //               sx={{
// //                 color: "white",
// //                 transition: "0.3s",
// //                 "&:hover": {
// //                   color: "#ffd700",
// //                   transform: "scale(1.1)"
// //                 }
// //               }}
// //             >
// //               Home
// //             </Button>

// //             {/* 🔥 Login / Profile */}
// //             {!isLoggedIn ? (
// //               <Button
// //                 color='inherit'
// //                 onClick={() => navigate("/login")}
// //                 sx={{
// //                   color: "white",
// //                   transition: "0.3s",
// //                   "&:hover": {
// //                     color: "#ffd700",
// //                     transform: "scale(1.1)"
// //                   }
// //                 }}
// //               >
// //                 LOGIN
// //               </Button>
// //             ) : (
// //               <>
// //                 <IconButton onClick={handleMenuOpen}>
// //                   <AccountCircleIcon sx={{ color: "white", fontSize: 30 }} />
// //                 </IconButton>

// //                 <Menu
// //                   anchorEl={anchorEl}
// //                   open={Boolean(anchorEl)}
// //                   onClose={handleMenuClose}
// //                 >
// //                   <MenuItem onClick={handleProfile}>Profile</MenuItem>
// //                   <MenuItem onClick={handleLogout}>Logout</MenuItem>
// //                 </Menu>
// //               </>
// //             )}

// //             {/* 🔹 Search */}
// //             <InputBase
// //               placeholder="Search items..."
// //               sx={{
// //                 background: "rgba(255,255,255,0.15)",
// //                 padding: "6px 12px",
// //                 borderRadius: "20px",
// //                 color: "white",
// //                 transition: "0.3s",
// //                 width: "200px",
// //                 "&:hover": {
// //                   background: "rgba(255,255,255,0.25)"
// //                 }
// //               }}
// //             />

// //             <SearchIcon sx={{ color: "white", mr: 0.1 }} />

// //           </Box>
// //         </Toolbar>
// //       </AppBar>
// //     </div>
// //   )
// // }

// import React from 'react'
// import {
//   AppBar,
//   Toolbar,
//   Button,
//   Typography,
//   InputBase,
//   Box
// } from '@mui/material'
// import SearchIcon from "@mui/icons-material/Search"
// import { useNavigate, useLocation } from 'react-router-dom'
// import logo from '../../../assets/logo2.png'

// export default function Topbar() {

//   const navigate = useNavigate()
//   const location = useLocation()

//   // 🔥 Always fresh (no stale state)
//   const token = localStorage.getItem("token")
//   const isLoggedIn = !!token

//   // 🔥 Decide button dynamically
//   const renderAuthButton = () => {
//     if (isLoggedIn) {
//       return (
//         <>
//           <Button onClick={() => navigate("/Home")}>Home</Button>
//           <Button onClick={() => navigate("/MyProfile")}>MyProfile</Button>
//         </>
//       )
//     }

//     if (location.pathname === "/login") {
//       return <Button onClick={() => navigate("/")}>Register</Button>
//     }

//     if (location.pathname === "/register") {
//       return <Button onClick={() => navigate("/login")} variant='contained'>Login</Button>
//     }

//     return <Button onClick={() => navigate("/login")}>Login</Button>
//   }

//   return (
//     <AppBar
//       position='static'
//       sx={{
//         background: "linear-gradient(135deg, #4f46e5, #9333ea, #ec4899)"
//       }}
//     >
//       <Toolbar sx={{ height: '100px' }}>

//         {/* Logo */}
//         <Box
//           component="img"
//           src={logo}
//           alt="Logo"
//           onClick={() => navigate("/")}
//           sx={{
//             height: "70px",
//             cursor: "pointer",
//             borderRadius: "50px"
//           }}
//         />

//         <Typography
//           variant='h5'
//           sx={{
//             flexGrow: 1,
//             ml: 2,
//             fontFamily: "poppins",
//             fontWeight: "bold",
//             color: "white"
//           }}
//         >
//           RETRIEVIA
//         </Typography>

//         {/* 🔹 Buttons */}
//         <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

//           {renderAuthButton()}

//           {/* Search */}
//           <InputBase
//             placeholder="Search items..."
//             sx={{
//               background: "rgba(255,255,255,0.15)",
//               padding: "6px 12px",
//               borderRadius: "20px",
//               color: "white",
//               width: "200px",
//               "&:hover": {
//                 background: "rgba(255,255,255,0.25)"
//               }
//             }}
//           />

//           <SearchIcon sx={{ color: "white" }} />

//         </Box>

//       </Toolbar>
//     </AppBar>
//   )
// }

// import React from 'react'
// import {
//   AppBar,
//   Toolbar,
//   Button,
//   Typography,
//   Box
// } from '@mui/material'
// import { useNavigate, useLocation } from 'react-router-dom'
// import logo from '../../../assets/logo2.png'

// export default function Topbar() {

//   const navigate = useNavigate()
//   const location = useLocation()

//   const token = localStorage.getItem("token")
//   const isLoggedIn = !!token

//   // 🔥 Common Button Style
//   const navBtnStyle = {
//     color: "white",
//     fontWeight: "600",
//     fontFamily: "poppins",
//     textTransform: "none",
//     px: 2,
//     borderRadius: "20px",
//     transition: "0.3s",
//     "&:hover": {
//       background: "rgba(255,255,255,0.2)",
//       transform: "scale(1.08)"
//     }
//   }

//   const activeStyle = {
//     background: "rgba(255,255,255,0.25)"
//   }

//   const renderAuthButton = () => {
//     if (isLoggedIn) {
//       return (
//         <>
//           <Button
//             onClick={() => navigate("/Home")}
//             sx={{
//               ...navBtnStyle,
//               ...(location.pathname === "/Home" && activeStyle)
//             }}
//           >
//             Home
//           </Button>

//           <Button
//             onClick={() => navigate("/MyProfile")}
//             sx={{
//               ...navBtnStyle,
//               ...(location.pathname === "/MyProfile" && activeStyle)
//             }}
//           >
//             My Profile
//           </Button>
//         </>
//       )
//     }

//     if (location.pathname === "/login") {
//       return (
//         <Button
//           onClick={() => navigate("/")}
//           sx={navBtnStyle}
//         >
//           Register
//         </Button>
//       )
//     }

//     if (location.pathname === "/") {
//       return (
//         <Button
//           onClick={() => navigate("/login")}
//           sx={{
//             ...navBtnStyle,
//             background: "white",
//             color: "#9333ea",
//             "&:hover": {
//               background: "#f1f5f9"
//             }
//           }}
//         >
//           Login
//         </Button>
//       )
//     }

//     return (
//       <Button
//         onClick={() => navigate("/login")}
//         sx={navBtnStyle}
//       >
//         Login
//       </Button>
//     )
//   }

//   return (
//     <AppBar
//       position='static'
//       sx={{
//         background: "linear-gradient(135deg, #4f46e5, #9333ea, #ec4899)"
//       }}
//     >
//       <Toolbar sx={{ height: '100px' }}>

//         {/* Logo */}
//         <Box
//           component="img"
//           src={logo}
//           alt="Logo"
//           onClick={() => navigate("/")}
//           sx={{
//             height: "70px",
//             cursor: "pointer",
//             borderRadius: "50px"
//           }}
//         />

//         <Typography
//           variant='h5'
//           sx={{
//             flexGrow: 1,
//             ml: 2,
//             fontFamily: "poppins",
//             fontWeight: "bold",
//             color: "white"
//           }}
//         >
//           RETRIEVIA
//         </Typography>

//         {/* 🔹 Buttons */}
//         <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//           {renderAuthButton()}
//         </Box>

//       </Toolbar>
//     </AppBar>
//   )
// }

// import React from 'react'
// import {
//   AppBar,
//   Toolbar,
//   Button,
//   Typography,
//   Box
// } from '@mui/material'
// import { useNavigate, useLocation } from 'react-router-dom'
// import logo from '../../../assets/logo2.png'

// export default function Topbar() {

//   const navigate = useNavigate()
//   const location = useLocation()

//   const token = localStorage.getItem("token")
//   const isLoggedIn = !!token

//   // 👉 Optional: extract name if stored (fallback User)
//   const userName = localStorage.getItem("name") || "User"

//   const navBtnStyle = {
//     color: "white",
//     fontWeight: "600",
//     fontFamily: "poppins",
//     textTransform: "none",
//     px: 2,
//     borderRadius: "20px",
//     position: "relative",
//     transition: "0.3s",
//     "&:hover": {
//       transform: "scale(1.08)"
//     }
//   }

//   // 🔥 underline animation
//   const underlineStyle = {
//     content: '""',
//     position: "absolute",
//     width: "100%",
//     height: "2px",
//     bottom: 0,
//     left: 0,
//     backgroundColor: "white",
//     transform: "scaleX(1)",
//   }

//   const renderAuthButton = () => {
//     if (isLoggedIn) {
//       return (
//         <>
//           <Button
//             onClick={() => navigate("/Home")}
//             sx={navBtnStyle}
//           >
//             Home
//             {location.pathname === "/Home" && (
//               <Box sx={underlineStyle} />
//             )}
//           </Button>

//           <Button
//             onClick={() => navigate("/MyProfile")}
//             sx={navBtnStyle}
//           >
//             My Profile
//             {location.pathname === "/MyProfile" && (
//               <Box sx={underlineStyle} />
//             )}
//           </Button>

//           {/* 🔥 UNIQUE: + POST BUTTON */}
//           <Button
//             onClick={() => navigate("/post")}
//             sx={{
//               ml: 1,
//               background: "white",
//               color: "#9333ea",
//               fontWeight: "bold",
//               borderRadius: "25px",
//               px: 2,
//               "&:hover": {
//                 background: "#f1f5f9",
//                 transform: "scale(1.1)"
//               }
//             }}
//           >
//             + Post
//           </Button>
//         </>
//       )
//     }

//     if (location.pathname === "/login") {
//       return (
//         <Button onClick={() => navigate("/")} sx={navBtnStyle}>
//           Register
//         </Button>
//       )
//     }

//     if (location.pathname === "/") {
//       return (
//         <Button
//           onClick={() => navigate("/login")}
//           sx={{
//             ...navBtnStyle,
//             background: "white",
//             color: "#9333ea",
//             "&:hover": {
//               background: "#f1f5f9"
//             }
//           }}
//         >
//           Login
//         </Button>
//       )
//     }

//     return (
//       <Button onClick={() => navigate("/login")} sx={navBtnStyle}>
//         Login
//       </Button>
//     )
//   }

//   return (
//     <AppBar
//       position='static'
//       sx={{
//         background: "linear-gradient(135deg, #4f46e5, #9333ea, #ec4899)"
//       }}
//     >
//       <Toolbar sx={{ height: '100px' }}>

//         {/* Logo */}
//         <Box
//           component="img"
//           src={logo}
//           alt="Logo"
//           onClick={() => navigate("/")}
//           sx={{
//             height: "70px",
//             cursor: "pointer",
//             borderRadius: "50px"
//           }}
//         />

//         {/* 🔥 BRAND + GREETING */}
//         <Box sx={{ flexGrow: 1, ml: 2 }}>
//           <Typography
//             variant='h5'
//             sx={{
//               fontFamily: "poppins",
//               fontWeight: "bold",
//               color: "white"
//             }}
//           >
//             RETRIEVIA
//           </Typography>

//           {isLoggedIn && (
//             <Typography sx={{ fontSize: "14px", opacity: 0.8 }}>
//               Hi {userName}👋
//             </Typography>
//           )}
//         </Box>

//         {/* Buttons */}
//         <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//           {renderAuthButton()}
//         </Box>

//       </Toolbar>
//     </AppBar>
//   )
// }

import React from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box
} from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../../../assets/logo2.png'

export default function Topbar() {

  const navigate = useNavigate()
  const location = useLocation()

  const token = localStorage.getItem("token")
  const isLoggedIn = !!token

  const userName = localStorage.getItem("name") || "User"

  // 🔹 Common button style
  const navBtnStyle = {
    color: "white",
    fontWeight: "600",
    fontFamily: "poppins",
    textTransform: "none",
    px: 2,
    borderRadius: "20px",
    position: "relative",
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.08)"
    }
  }

  // 🔹 Active underline
  const underlineStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "2px",
    backgroundColor: "white"
  }

  // 🔹 Buttons logic
  const renderAuthButton = () => {

    // ✅ LOGGED IN
    if (isLoggedIn) {
      return (
        <>
          <Button
            onClick={() => navigate("/Home")}
            sx={navBtnStyle}
          >
            Home
            {location.pathname === "/Home" && (
              <Box sx={underlineStyle} />
            )}
          </Button>

          <Button
            onClick={() => navigate("/MyProfile")}
            sx={navBtnStyle}
          >
            My Profile
            {location.pathname === "/MyProfile" && (
              <Box sx={underlineStyle} />
            )}
          </Button>

          {/* 🔥 Logout Button */}
          <Button
            onClick={() => {
              if (window.confirm("Are you sure you want to logout?")) {
                localStorage.removeItem("token")
                localStorage.removeItem("name")
                navigate("/login")
              }
            }}
            sx={{
              ml: 1,
              background: "white",
              color: "#dc2626",
              fontWeight: "bold",
              borderRadius: "25px",
              px: 2,
              "&:hover": {
                background: "#fee2e2",
                transform: "scale(1.1)"
              }
            }}
          >
            Logout
          </Button>
        </>
      )
    }

    // ❌ NOT LOGGED IN

    if (location.pathname === "/login") {
      return (
        <Button onClick={() => navigate("/")} sx={navBtnStyle}>
          Register
        </Button>
      )
    }

    if (location.pathname === "/") {
      return (
        <Button
          onClick={() => navigate("/login")}
          sx={{
            ...navBtnStyle,
            background: "white",
            color: "#9333ea",
            "&:hover": {
              background: "#f1f5f9"
            }
          }}
        >
          Login
        </Button>
      )
    }

    return (
      <Button onClick={() => navigate("/login")} sx={navBtnStyle}>
        Login
      </Button>
    )
  }

  return (
    <AppBar
      position='static'
      sx={{
        background: "linear-gradient(135deg, #4f46e5, #9333ea, #ec4899)"
      }}
    >
      <Toolbar sx={{ height: '100px' }}>

        {/* 🔹 Logo */}
        <Box
          component="img"
          src={logo}
          alt="Logo"
          onClick={() => navigate("/")}
          sx={{
            height: "70px",
            cursor: "pointer",
            borderRadius: "50px"
          }}
        />

        {/* 🔹 Title + Greeting */}
        <Box sx={{ flexGrow: 1, ml: 2 }}>
          <Typography
            variant='h5'
            sx={{
              fontFamily: "poppins",
              fontWeight: "bold",
              color: "white"
            }}
          >
            RETRIEVIA
          </Typography>

          {isLoggedIn && (
            <Typography sx={{ fontSize: "14px", opacity: 0.8 }}>
              Hi, {userName} 👋
            </Typography>
          )}
        </Box>

        {/* 🔹 Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {renderAuthButton()}
        </Box>

      </Toolbar>
    </AppBar>
  )
}