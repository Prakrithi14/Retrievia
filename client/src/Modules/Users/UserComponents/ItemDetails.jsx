import React, { useEffect, useState } from "react";
import {
Box,
Typography,
Card,
CardMedia,
Button
} from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ItemDetails() {

const { id } = useParams();
const [item, setItem] = useState(null);

useEffect(() => {
axios.get(`http://localhost:8000/items/item/${id}`)
.then((res) => {
setItem(res.data);
})
.catch((err) => console.log(err));
}, [id]);

if (!item) return <Typography textAlign="center">Loading...</Typography>;

return (
<Box
sx={{
minHeight: "100vh",
display: "flex",
justifyContent: "center",
alignItems: "center",
background: "#f4f6f8",
p: 3
}}
>


  <Card
    sx={{
      maxWidth: 500,
      width: "100%",
      borderRadius: 3,
      boxShadow: 4,
      p: 2
    }}
  >

    {/* Image */}
    <CardMedia
      component="img"
      height="300"
      image={`http://localhost:8000/uploads/${item.image}`}
    />

    {/* Details */}
    <Box sx={{ mt: 2 }}>

      <Typography variant="h5" fontWeight="bold" mb={1}>
        {item.title}
      </Typography>

      <Typography variant="body1" mb={1}>
        📍 Location: {item.location}
      </Typography>

      <Typography variant="body1" mb={1}>
        🏷 Type: {item.type}
      </Typography>

      {/* ❌ Description hidden intentionally */}

    </Box>

    {/* Action */}
    <Button
      fullWidth
      variant="contained"
      color="primary"
      sx={{ mt: 2 }}
    >
      Claim This Item
    </Button>

  </Card>

</Box>


);
}
