// import { Button, Card, CardActions, CardHeader, CardMedia, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// export default function VieIwtems() {
//   const [items,setItems]=useState([]);
//   const [category,setCategory]=useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const navigate=useNavigate();
//   const filtereditems=selectedCategory==="All"?items:items.filter((item)=>item.categoryId===selectedCategory)

//   useEffect(()=>{
//     axios.get('http://localhost:8000/items/all')
//     .then((res)=>{
//       console.log(res.data)
//       setItems(res.data)
//     })
//     .catch((error)=>{
//       console.log(error)
//     })
//   },[])
//   useEffect(()=>{
//     axios.get('http://localhost:8000/categories/getcategory')
//     .then((res)=>{
//       console.log("category:",res.data.allcategory)
//       setCategory(res.data.allcategory)
//     })
//     .catch(()=>{
//       console.log(error)
//     })
//   },[])
//   return (
//     <div style={{display:'flex',flexWrap:'wrap',gap:'20px'}}>
//       <FormControl>
//         <InputLabel>Category</InputLabel>
//         <Select label="Category" 
//       value={selectedCategory}
//       onChange={(e)=>setSelectedCategory(e.target.value)}>
//         <MenuItem value="All">All</MenuItem>
//         {category.map((cat)=>(
//           <MenuItem value={cat._id}>{cat.categoryname}</MenuItem>
//         ))}
//       </Select>
//       </FormControl>
//       {filtereditems.map((idata)=>(
//         <Card sx={{ maxWidth: 345 }}>
//           <CardMedia 
//           component="img"
//           height="194"
//           image={`http://localhost:8000/uploads/${idata.image}`}
//           alt={idata.title}/>
//           <CardActions>
//             {/* <Button variant='contained' fullWidth color='success' onClick={()=>navigate(`/BookingForm/${idata._id}`)}>Book now</Button> */}
//             <Button>buy</Button>
//           </CardActions>
//         </Card>
//       ))}
      
//     </div>
//   )
// }

import {
Box,
Button,
Card,
CardActions,
CardContent,
CardMedia,
FormControl,
InputLabel,
MenuItem,
Select,
Typography,
TextField
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ViewItems() {

const [items, setItems] = useState([]);
const [category, setCategory] = useState([]);
const [selectedCategory, setSelectedCategory] = useState("All");

const [type, setType] = useState("All");   // 🔥 NEW
const [search, setSearch] = useState("");  // 🔥 NEW

const navigate = useNavigate();

// ✅ your existing category filter (unchanged)
const filteredItems =
selectedCategory === "All"
? items
: items.filter((item) => {
const id =
item.categoryId?._id || item.categoryId || item.category;
return id?.toString() === selectedCategory.toString();
});

// 🔥 ADDITIONAL FILTER (type + search)
const finalItems = filteredItems.filter((item) => {


const matchType =
  type === "All" || item.type === type;

const matchSearch =
  item.title.toLowerCase().includes(search.toLowerCase());

return matchType && matchSearch;


});

// 🔹 Fetch items
useEffect(() => {
axios.get("http://localhost:8000/items/all")
.then((res) => {
setItems(res.data);
})
.catch((error) => {
console.log(error);
});
}, []);

// 🔹 Fetch categories
useEffect(() => {
axios.get("http://localhost:8000/categories/getcategory")
.then((res) => {
setCategory(res.data.allcategory);
})
.catch((error) => {
console.log(error);
});
}, []);

return (
<Box sx={{ p: 4, minHeight: "100vh", background: "#f4f6f8" }}>

  {/* 🔹 TOP CONTROLS */}
  <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mb: 4, flexWrap: "wrap" }}>

    {/* Category */}
    <FormControl sx={{ minWidth: 180 }}>
      <InputLabel>Category</InputLabel>
      <Select
        label="Category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <MenuItem value="All">All</MenuItem>

        {category.map((cat) => (
          <MenuItem key={cat._id} value={cat._id}>
            {cat.categoryname}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

    {/* 🔥 Search */}
    <TextField
      placeholder="Search items..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    {/* 🔥 Type Buttons */}
    <Button
      variant={type === "All" ? "contained" : "outlined"}
      onClick={() => setType("All")}
    >
      All
    </Button>
    <Button
      variant={type === "lost" ? "contained" : "outlined"}
      onClick={() => setType("lost")}
    >
      Lost
    </Button>

    <Button
      variant={type === "found" ? "contained" : "outlined"}
      onClick={() => setType("found")}
    >
      Found
    </Button>

    

  </Box>
<Box
  sx={{
    width:"100%",
    mx: "auto",
    mt: 3,
    mb:4,
    p: 2,
    borderRadius: 2,
    background: "#fef9c3",
    borderLeft: "5px solid #facc15",
    boxShadow: 1,
  }}
  
>
  <Typography
    sx={{
      fontSize: "14px",
      color: "#92400e",
      lineHeight: 1.6
    }}
  >
    <strong>Please note:</strong> Only the image with the location found is available. 
    If you think it’s yours, provide details like color, size, and what it contains 
    so we can verify and help you claim your belongings.
  </Typography>
</Box>

  {/* 🔹 Cards */}
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: 3,
      justifyContent: "center"
    }}
  >
    {finalItems.map((idata) => {

      const categoryName = category.find(
        (cat) =>
          cat._id.toString() ===
          (idata.categoryId?._id || idata.categoryId)?.toString()
      )?.categoryname;

      return (
        <Card
          key={idata._id}
          sx={{
            width: 300,
            borderRadius: 3,
            boxShadow: 3,
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.04)"
            }
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={
              idata.image
                ? `http://localhost:8000/uploads/${idata.image}`
                : "https://via.placeholder.com/300"
            }
          />

          <CardContent>
            <Typography variant="h6" fontWeight="bold" noWrap>
              {idata.title}
            </Typography>

            <Typography variant="body2">
              {idata.location}
            </Typography>

            {/* <Typography variant="body2">
              {categoryName || "Unknown"}
            </Typography> */}
          </CardContent>

          <CardActions>
            <Button
              fullWidth
              variant="contained"
              color="success"
              onClick={() => navigate(`/item/${idata._id}`)}
            >
              View
            </Button>
          </CardActions>
        </Card>
      );
    })}
  </Box>

</Box>


);
}
