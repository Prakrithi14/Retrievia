import { Routes, Route } from "react-router-dom";
import Home from "../UserComponents/Home";
import Login from "../UserComponents/Login";
import Register from "../UserComponents/Register";
import Topbar from "../UserComponents/Topbar";

export default function URoutes() {
  return (
    <div>
    <Topbar/>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Register />} />
    </Routes>
    </div>
  );
}