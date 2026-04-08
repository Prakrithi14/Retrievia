const express=require("express")
const route=express.Router()
const {registeradmin,loginadmin}=require("../Controller/Admin_Controller")

route.post("/registeradmin",registeradmin)
route.post("/loginadmin",loginadmin)
module.exports=route