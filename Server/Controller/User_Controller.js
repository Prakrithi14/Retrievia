const usertable=require('../Model/User_model')

const registeruser=async(req,res)=>{
    try {
        const {name,email,phone,password}=req.body;
        const existinguser=await usertable.findOne({email})
        if(existinguser){
            res.json({mesage:"User Already exists"})
        }
        const userdetails=new usertable({
            name,
            email,
            phone,
            password,
        })
        await userdetails.save();
        res.status(201).json({message:"User Registered Successfully",userdetails})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error",error})
    }
}
const userlogin=async(req,res)=>{
    try {
        const {email,password}=req.body
        const loginuser=await usertable.findOne({email,password})
        if(!loginuser){
            res.json({success:false,message:"Invalid Credentials.Check your email and password"})
        } else {
            res.json({success:true,message:"Login Successful",user:loginuser})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server Error",error})
    }
}
module.exports={registeruser,userlogin}