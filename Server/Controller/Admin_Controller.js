const admintable=require("../Model/Admin_Model")
const usertable=require("../Model/User_model")
const itemtable=require("../Model/Item_Model")

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
    const {email,password}=req.body;
    try {
        const admin=await admintable.findOne({email})
        if(!admin){
            res.json({success:false,message:"Invalid Credentials.Check your email and password"})
        } else {
            res.json({success:true,message:"Login Successful",user:admin})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error",error})
    }
}

const dashboardata=async(req,res)=>{
    try {
        const totalusers=await usertable.countDocuments();
        const totalitems=await itemtable.countDocuments();
        res.json({success:true,data:{
            users:totalusers,
            items:totalitems,
            claims:totalusers,
            sales:totalusers,
        }
    })
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error",error})
    }
}

module.exports={registeradmin,loginadmin,dashboardata}