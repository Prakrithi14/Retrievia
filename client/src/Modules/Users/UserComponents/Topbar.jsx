import React from 'react'
import {AppBar, Toolbar,Button, Typography,InputBase,Box} from '@mui/material'
import SearchIcon from "@mui/icons-material/Search"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import logo from '../../../assets/logo2.png'
export default function Topbar() {
  return (
    <div>
      <AppBar position='static' sx={{
    background: "linear-gradient(135deg, #4f46e5, #9333ea, #ec4899)"
  }}>
        <Toolbar sx={{height:'100px'}}>
            
           <Box
  component="img"
  src={logo}
  alt="Logo"
  sx={{
    height: "70px",
    cursor: "pointer",
    borderRadius:"50px"
  }}
/>
<Typography variant='h5' sx={{ flexGrow: 1, ml: 2,fontFamily:"poppins",fontWeight:"bold", color: "white" }}>
 RETRIEVIA
</Typography>
           <Box sx={{ display: "flex", alignItems: "center" ,gap:2}}>

            <Button color='inherit' sx={{
                    color: "white",
                    transition: "0.3s",
                    "&:hover": {
                    color: "#ffd700",
                    transform: "scale(1.1)" }
                     }}>Home
            </Button>
            <Button color='inherit' sx={{
                    color: "white",
                    transition: "0.3s",
                    "&:hover": {
                    color: "#ffd700",
                    transform: "scale(1.1)" }
                     }}>LOGIN
            </Button>
            
             <InputBase
  placeholder="Search items..."
  sx={{
    background: "rgba(255,255,255,0.15)",
    padding: "6px 12px",
    borderRadius: "20px",
    color: "white",
    transition: "0.3s",
    width: "200px",

    "&:hover": {
      background: "rgba(255,255,255,0.25)"
    }
  }}
/>
<SearchIcon sx={{ color: "white",mr:0.1}}/>
<AccountCircleIcon
  sx={{
    color: "white",
    ml: 120,
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.2)",
      color: "#ffd700",
      
    }
  }}
/>

            </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}
