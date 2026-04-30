const admintable=require("../Model/Admin_Model")
const usertable=require("../Model/User_model")
const itemtable=require("../Model/Item_Model")
const claimtable=require("../Model/Claim_Model")
const jwt=require('jsonwebtoken')


const registeradmin=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const existingadmin=await admintable.findOne({email})
        if(existingadmin){
            res.status(400).json({message:"Admin already exists"})
        }else{
            const newadmin=new admintable({name,email,password})
            await newadmin.save()
            res.status(201).json({message:"Admin registered successfully"})
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error",error})
    }
}

const loginadmin=async(req,res)=>{
    try {
        const {email,password}=req.body
        const userlogin=await admintable.findOne({
            email,password
        })
        if(!userlogin){
            res.json({
                success:false,
                message:"user not found"
            })
        }
        else{
            const token=await jwt.sign(userlogin.id,SECRET_KEY)
            res.json({
                success:true,
                message:"Login Successful!!",token}
            )
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error",error})
    }
}

const dashboardata=async(req,res)=>{
    try {
        const totalusers=await usertable.countDocuments();
        const totalitems=await itemtable.countDocuments();
        const totalclaims=await claimtable.countDocuments();
        res.json({success:true,data:{
            users:totalusers,
            items:totalitems,
            claims:totalclaims,
            sales:totalusers,
        }
    })
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error",error})
    }
}

module.exports={registeradmin,loginadmin,dashboardata}