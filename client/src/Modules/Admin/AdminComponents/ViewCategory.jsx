import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function ViewCategory() {
     const [category,setCategory]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:8000/categories/getcategory")
    .then((res)=>{
      console.log(res.data.allcategory)
      setCategory(res.data.allcategory)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  const HandleDelete=(cid)=>{
    axios.delete(`http://localhost:8000/categories/deletecategory/${cid}`)
    .then((res)=>{
      console.log(res)
      alert("Category deleted successfully")
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>
       <Box sx={{
      minHeight: "100vh",
      background: "#f4f6f8",
      p: 4
    }}>
      <Typography
     variant="h4"
     mb={3}
     fontWeight="bold"
     textAlign="center"
   >
      Booking Management </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TableContainer sx={{ width: "90%", background: "white", borderRadius: 2, boxShadow: 3 }}>
        <Table>
          <TableHead sx={{ background: "#4f46e5" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Category Name</TableCell>
              <TableCell sx={{ color: "white" }}>Category Description</TableCell>
              <TableCell sx={{ color: "white" }}>Actions</TableCell>
            
            </TableRow>
          </TableHead>
           <TableBody>
          {category.map((row,index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            
              <TableCell >{row.categoryname}</TableCell>
              <TableCell >{row.categorydescription}</TableCell>
              
<TableCell>
<Button variant="contained" color="error" onClick={()=>HandleDelete(row._id)}>Delete</Button>

 
</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </TableContainer>
      </Box>
    </Box>
    </div>
  )
}
