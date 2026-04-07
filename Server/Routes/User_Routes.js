const express=require('express');
const { registeruser ,userlogin} = require('../Controller/User_Controller');
const route=express.Router();

route.post("/registeruser",registeruser)
route.post("/userlogin",userlogin)

module.exports=route