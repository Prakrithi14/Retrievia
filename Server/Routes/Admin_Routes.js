const express=require("express")
const route=express.Router()
const {registeradmin,loginadmin,dashboardata}=require("../Controller/Admin_Controller")

route.post("/registeradmin",registeradmin)
route.post("/loginadmin",loginadmin)
route.get("/dashboard",dashboardata)

module.exports=route