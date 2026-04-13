import React, { useEffect, useState } from "react";
import {
Box,
Typography,
Button,
Grid,
Card,
CardContent,
CardMedia,
TextField,
MenuItem
} from "@mui/material";
import axios from "axios";

export default function ViewItems() {

const [items, setItems] = useState([]);
const [type, setType] = useState("lost");

const [search, setSearch] = useState("");
const [category, setCategory] = useState("");

// 🔹 Fetch items
useEffect(() => {
fetchItems();
}, [type]);

const fetchItems = async () => {
try {
const res = await axios.get(`http://localhost:8000/items/${type}`);
setItems(res.data);
} catch (error) {
console.log(error);
}
};

// 🔥 Filter Logic
const filteredItems = items.filter((item) => {
const matchSearch =
item.title.toLowerCase().includes(search.toLowerCase()) ||
item.description.toLowerCase().includes(search.toLowerCase());


const matchCategory =
  category === "" || item.category === category;

return matchSearch && matchCategory;


});

return (
<Box sx={{ p: 4, minHeight: "100vh", background: "#f4f6f8" }}>


  <Typography variant="h4" textAlign="center" mb={3} fontWeight="bold">
    Browse Items
  </Typography>

  <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
    <Button
      variant={type === "lost" ? "contained" : "outlined"}
      sx={{ mr: 2 }}
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
      display: "flex",
      justifyContent: "center",
      gap: 2,
      mb: 4,
      flexWrap: "wrap"
    }}
  >
    <TextField
      placeholder="Search items..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      sx={{ width: "250px" }}
    />

    <TextField
      select
      label="Category"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      sx={{ width: "200px" }}
    >
      <MenuItem value="">All</MenuItem>
      <MenuItem value="Bags">Bags</MenuItem>
      <MenuItem value="Electronics">Electronics</MenuItem>
      <MenuItem value="Pets">Pets</MenuItem>
    </TextField>
  </Box>


  <Grid container spacing={3}>
    {filteredItems.length > 0 ? (
      filteredItems.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item._id}>

          <Card
            sx={{
              borderRadius: "15px",
              boxShadow: 4,
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.03)"
              }
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={`http://localhost:8000/uploads/${item.image}`}
            />

            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {item.title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>

              <Typography mt={1}>
                 {item.location}
              </Typography>

              <Typography>
                 {item.category}
              </Typography>
            </CardContent>

          </Card>

        </Grid>
      ))
    ) : (
      <Typography textAlign="center" width="100%">
        No matching items found
      </Typography>
    )}
  </Grid>

</Box>


);
}
