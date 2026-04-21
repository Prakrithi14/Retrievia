import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
export default function ItemDetails() {
  const {id}=useParams()
  const navigate=useNavigate()
  const [item,setItem]=useState([])
  console.log(id)
  useEffect(()=>{
    axios.get(`http://localhost:8000/items/item/${id}`)
    .then((res)=>{
      console.log(res.data.itembyid)
      setItem(res.data.itembyid)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  return (
    <div>
      <Box
       sx={{
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    pt: 5,
    px: 2,
    backgroundColor: '#f5f5f5'
  }}>
        <Card
        sx={{
      width: '100%',
      maxWidth: 700,
      borderRadius: 3,
      boxShadow: 5,
      overflow: 'hidden'
    }}>
          <CardMedia 
          component="img"
          image={`http://localhost:8000/uploads/${item.image}`} 
          alt={item.title}/>
            <CardContent>
                <Typography  mb={1}>
                  📍  Location: {item.location}
                 </Typography>

                 <Typography  mb={1}>
                     🏷 Type: {item.type}
                  </Typography>
                 <Typography  mb={1}>
                     🏷 Updated Date: {item.createdAt}
                  </Typography>
                 
            </CardContent>
            <CardActions>
              <Button variant='contained' color='success' fullWidth onClick={() => navigate(`/claim/${item._id}`)}>Claim Item</Button>
            </CardActions>
        
        </Card>
      </Box>
    </div>
  )
}
