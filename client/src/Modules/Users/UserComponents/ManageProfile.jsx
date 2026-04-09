import { Button, Paper, Typography } from '@mui/material'
import React from 'react'

export default function ManageProfile() {
    // const handleUpdate=()=>{
    //     alert("Profile Updated Successfully")
    // }
  return (
    <div>
      {/* <Paper elevation={20} style={{width:"500px",borderRadius:"35px",padding:"15px",marginTop:"140px",marginBottom:"50px",marginLeft:"500px"}}>  */}
        <Typography variant='h4' style={{fontFamily:"math",fontWeight:"bold", marginLeft:"150px"}}>Manage Profile</Typography>
        <Typography>Name</Typography>
        <Typography>Email</Typography>
        <Typography>Phone</Typography>
        <Button variant='contained' style={{marginLeft:"150px"}} >
          Update
        </Button>
      {/* </Paper> */}
    </div>
  )
}
