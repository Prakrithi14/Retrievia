const express=require('express');
const { registeruser ,loginUser,getuser,deleteuser,updateuser,getMe}= require('../Controller/User_Controller');
const route=express.Router();
const auth = require("../Middleware/auth");
route.post("/registeruser",registeruser)
route.post("/loginUser",loginUser)
route.get("/getuser",getuser)
route.get("/getMe",auth,getMe)
route.delete("/deleteuser/:id",deleteuser)
route.put("/updateuser",auth,updateuser)

module.exports=route