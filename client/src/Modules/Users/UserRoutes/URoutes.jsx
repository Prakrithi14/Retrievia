import { Routes, Route } from "react-router-dom";
import Home from "../UserComponents/Home";
import Login from "../UserComponents/Login";
import Register from "../UserComponents/Register";
import Topbar from "../UserComponents/TopBar";
import ManageProfile from "../UserComponents/ManageProfile";


export default function URoutes() {
  return (
    <div>
      <Topbar/>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ManageProfile" element={<ManageProfile />} />
      <Route path="/" element={<Register />} />
    </Routes>
    </div>
  );
}