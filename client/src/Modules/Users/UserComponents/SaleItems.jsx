// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardMedia,
//   CardContent,
//   Button,
//   Chip,
//   Grid
// } from "@mui/material";
// import axios from "axios";

// export default function SaleItems() {

//   const [items, setItems] = useState([]);

//   const fetchSaleItems = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:8000/items/sale"
//       );

//       setItems(res.data);

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchSaleItems();
//   }, []);

//   return (
//     <Box sx={{ p: 4 }}>

//       <Typography
//         variant="h4"
//         textAlign="center"
//         mb={4}
//         fontWeight="bold"
//       >
//         Available Items (Sale / Adoption)
//       </Typography>

//       <Grid container spacing={3} justifyContent="center">

//         {items.length === 0 ? (
//           <Typography>No items available</Typography>
//         ) : (
//           items.map((item) => (
//             <Grid item key={item._id} xs={12} sm={6} md={4}>

//               <Card sx={{ borderRadius: 3, boxShadow: 3 }}>

//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={`http://localhost:8000/uploads/${item.image}`}
//                   alt={item.title}
//                 />

//                 <CardContent>

//                   <Typography variant="h6">
//                     {item.title}
//                   </Typography>

//                   <Typography variant="body2" color="text.secondary">
//                     {item.location}
//                   </Typography>

//                   <Chip
//                     label={item.status}
//                     color={
//                       item.status === "sale"
//                         ? "success"
//                         : "primary"
//                     }
//                     sx={{ mt: 1 }}
//                   />

//                   <Button
//                     fullWidth
//                     variant="contained"
//                     sx={{ mt: 2 }}
//                   >
//                     {item.status === "sale"
//                       ? "Buy"
//                       : "Adopt"}
//                   </Button>

//                 </CardContent>

//               </Card>

//             </Grid>
//           ))
//         )}

//       </Grid>

//     </Box>
//   );
// }

// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardMedia,
//   CardContent,
//   Button,
//   Chip,
//   Grid
// } from "@mui/material";
// import axios from "axios";

// export default function SaleItems() {

//   const [items, setItems] = useState([]);

//   // 🔹 Fetch sale items
//   const fetchSaleItems = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:8000/items/sale"
//       );

//       setItems(res.data);

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchSaleItems();
//   }, []);

//   // 🔥 BUY / ADOPT FUNCTION
//   const handleBuy = async (id) => {
//     const confirm = window.confirm("Are you sure you want to proceed?");

//     if (!confirm) return;

//     try {
//       await axios.put(`http://localhost:8000/items/buy/${id}`);

//       alert("Success!");

//       // 🔥 Remove item instantly from UI
//       setItems(prev => prev.filter(item => item._id !== id));

//     } catch (error) {
//       console.log(error);
//       alert("Error processing request");
//     }
//   };

//   return (
//     <Box sx={{ p: 4 }}>

//       <Typography
//         variant="h4"
//         textAlign="center"
//         mb={4}
//         fontWeight="bold"
//       >
//         Available Items (Sale / Adoption)
//       </Typography>

//       <Grid container spacing={3} justifyContent="center">

//         {items.length === 0 ? (
//           <Typography>No items available</Typography>
//         ) : (
//           items.map((item) => (
//             <Grid item key={item._id} xs={12} sm={6} md={4}>

//               <Card
//                 sx={{
//                   borderRadius: 3,
//                   boxShadow: 3,
//                   transition: "0.3s",
//                   "&:hover": {
//                     transform: "scale(1.03)"
//                   }
//                 }}
//               >

//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={`http://localhost:8000/uploads/${item.image}`}
//                   alt={item.title}
//                 />

//                 <CardContent>

//                   <Typography variant="h6" fontWeight="bold">
//                     {item.title}
//                   </Typography>

//                   <Typography variant="body2" color="text.secondary">
//                     {item.location}
//                   </Typography>

//                   <Chip
//                     label={item.status.toUpperCase()}
//                     color={
//                       item.status === "sale"
//                         ? "success"
//                         : "primary"
//                     }
//                     sx={{ mt: 1 }}
//                   />

//                   <Button
//                     fullWidth
//                     variant="contained"
//                     sx={{ mt: 2 }}
//                     onClick={() => handleBuy(item._id)}
//                     disabled={["sold", "adopted"].includes(item.status)}
//                   >
//                     {item.status === "sale"
//                       ? "Buy"
//                       : "Adopt"}
//                   </Button>

//                 </CardContent>

//               </Card>

//             </Grid>
//           ))
//         )}

//       </Grid>

//     </Box>
//   );
// }

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import axios from "axios";

export default function SaleItems() {

  const [items, setItems] = useState([]);
  const [openReceipt, setOpenReceipt] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // 🔹 Fetch sale items
  const fetchSaleItems = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/items/sale"
      );
      setItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSaleItems();
  }, []);

  // 🔥 BUY / ADOPT FUNCTION
  const handleBuy = async (item) => {
    const confirm = window.confirm("Confirm purchase?");

    if (!confirm) return;

    try {
      await axios.put(`http://localhost:8000/items/buy/${item._id}`);

      // 🔥 store item for receipt
      setSelectedItem(item);

      // 🔥 open receipt modal
      setOpenReceipt(true);

      // 🔥 remove item instantly
      setItems(prev => prev.filter(i => i._id !== item._id));

    } catch (error) {
      console.log(error);
      alert("Error processing request");
    }
  };

  return (
    <Box sx={{ p: 4 }}>

      <Typography
        variant="h4"
        textAlign="center"
        mb={4}
        fontWeight="bold"
      >
        Available Items (Sale / Adoption)
      </Typography>

      <Grid container spacing={3} justifyContent="center">

        {items.length === 0 ? (
          <Typography>No items available</Typography>
        ) : (
          items.map((item) => (
            <Grid item key={item._id} xs={12} sm={6} md={4}>

              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
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
                  alt={item.title}
                />

                <CardContent>

                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {item.location}
                  </Typography>

                  <Chip
                    label={item.status.toUpperCase()}
                    color={
                      item.status === "sale"
                        ? "success"
                        : "primary"
                    }
                    sx={{ mt: 1 }}
                  />

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={() => handleBuy(item)}   // ✅ FIXED
                    disabled={["sold", "adopted"].includes(item.status)}
                  >
                    {item.status === "sale"
                      ? "Buy"
                      : "Adopt"}
                  </Button>

                </CardContent>

              </Card>

            </Grid>
          ))
        )}

      </Grid>

      {/* 🔥 RECEIPT MODAL */}
      <Dialog open={openReceipt} onClose={() => setOpenReceipt(false)}>

        <DialogTitle textAlign="center">
          🧾 Purchase Receipt
        </DialogTitle>

        <DialogContent>
          {selectedItem && (
            <Box textAlign="center">

              <Typography variant="h6" fontWeight="bold">
                {selectedItem.title}
              </Typography>

              <Typography sx={{ mt: 1 }}>
                Location: {selectedItem.location}
              </Typography>

              <Typography sx={{ mt: 1 }}>
                Status: <b>Confirmed</b>
              </Typography>

              {/* 🔥 COD Highlight */}
              <Typography
                sx={{
                  mt: 2,
                  color: "green",
                  fontWeight: "bold",
                  background: "#dcfce7",
                  p: 1,
                  borderRadius: 2
                }}
              >
              Only Cash on Delivery Available
              </Typography>

            </Box>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenReceipt(false)}>
            Close
          </Button>
        </DialogActions>

      </Dialog>

    </Box>
  );
}