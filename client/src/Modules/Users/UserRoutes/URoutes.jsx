import { Routes, Route } from "react-router-dom";
import Home from "../UserComponents/Home";
import Login from "../UserComponents/Login";
import Register from "../UserComponents/Register";
import Topbar from "../UserComponents/Topbar";
import ManageProfile from "../UserComponents/ManageProfile";
import PostFoundItem from "../UserComponents/PostFoundItem";
import PostLostItem from "../UserComponents/PostLostItem";
import ViewItems from "../UserComponents/VieIwtems";
import ItemDetails from "../UserComponents/ItemDetails";
import ClaimItem from "../UserComponents/ClaimItem";
import WriteFeedback from "../UserComponents/WriteFeedback";
import MyProfile from "../UserComponents/MyProfile";
import SaleItems from "../UserComponents/SaleItems";


export default function URoutes() {
  return (
    <div>
      <Topbar/>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/MyProfile" element={<MyProfile />} />
      <Route path="/PostFoundItem" element={<PostFoundItem />} />
      <Route path="/PostLostItem" element={<PostLostItem />} />
      <Route path="/ViewItems" element={<ViewItems />} />
      <Route path="/item/:id" element={<ItemDetails />} />
      <Route path="/claim/:id" element={<ClaimItem />} />
      <Route path="/WriteFeedback" element={<WriteFeedback />} />
      <Route path="/SaleItems" element={<SaleItems />} />
      <Route path="/" element={<Register />} />
    </Routes>
    </div>
  );
}