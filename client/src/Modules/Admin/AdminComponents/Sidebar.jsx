import React, { useState } from "react";
import {
Drawer,
List,
ListItem,
ListItemButton,
ListItemText,
Toolbar,
IconButton,
Box
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PaymentIcon from "@mui/icons-material/Payment";
import FeedbackIcon from "@mui/icons-material/Feedback";
import CategoryIcon from '@mui/icons-material/Category';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from "react-router-dom";

export default function Sidebar() {
const [open, setOpen] = useState(true);

const menuItems = [
{ text: "Dashboard",link:"/Admin",icon: <DashboardIcon /> ,},
{ text: "Users",link: "/Admin/ViewUser", icon: <PeopleIcon /> },
{ text: "Add Category",link: "/Admin/AddCategory", icon: <AddCircleOutlineIcon/> },
{ text: "Users",link: "/Admin/ViewUser", icon: <CategoryIcon /> },
// { text: "Items", icon: <InventoryIcon /> },
// { text: "Claims", icon: <AssignmentIcon /> },
// { text: "Payments", icon: <PaymentIcon /> },
//   { text: "Feedback", icon: <FeedbackIcon /> }
  ];

  return (
<Drawer
variant="permanent"
sx={{
width: open ? 220 : 70,
flexShrink: 0,
"& .MuiDrawer-paper": {
width: open ? 220 : 70,
transition: "0.3s",
overflowX: "hidden",
background: "linear-gradient(180deg, #4f46e5, #9333ea)",
color: "white"
}
}}
>
{/* Toggle Button */}
<Toolbar
sx={{
display: "flex",
justifyContent: open ? "flex-end" : "center"
}}
>
<IconButton onClick={() => setOpen(!open)} sx={{ color: "white" }}> <MenuIcon /> </IconButton> </Toolbar>


  {/* Menu List */}
  <List>
    {}
    {menuItems.map((item, index) => (
  <ListItem key={item.text} disablePadding>
    <ListItemButton
      component={Link}
      to={item.link}
      sx={{
        justifyContent: open ? "initial" : "center",
        px: 2,
        color: "white",
        "&:hover": {
          background: "rgba(255,255,255,0.2)"
        }
      }}
    >
      {/* Icon */}
      <Box sx={{ minWidth: 0 }}>{item.icon}</Box>

      {/* Text */}
      <ListItemText
        primary={item.text}
        sx={{
          opacity: open ? 1 : 0,
          ml: open ? 2 : 0
        }}
      />
    </ListItemButton>
  </ListItem>
))}
  </List>
</Drawer>


);
}
