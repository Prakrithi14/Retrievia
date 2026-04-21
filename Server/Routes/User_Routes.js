const express=require('express');
const { registeruser ,loginUser,getuser,deleteuser,updateuser}= require('../Controller/User_Controller');
const route=express.Router();

route.post("/registeruser",registeruser)
route.post("/loginUser",loginUser)
route.get("/getuser",getuser)
route.delete("/deleteuser/:id",deleteuser)
route.put("/updateuser/:id",updateuser)


module.exports=route