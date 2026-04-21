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
const getuser=async(req,res)=>{
    try {
        const getallusers=await usertable.find()
        console.log(getallusers)        
        res.status(200).json({message:"User fetched",allusers:getallusers})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error",error})
    }
}
const deleteuser=async(req,res)=>{
    try {
        const {id}=req.params
        const deleteuser=await usertable.findByIdAndDelete(id)
        res.status(200).json({message:"User deleted",deleteduser:deleteuser})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error",error})
    }
}
const updateuser=async(req,res)=>{
    try {
        const {id}=req.params
        const body=req.body
        const updateduser=await usertable.findByIdAndUpdate(id,body,{new:true})
        console.log(updateduser)
        res.status(201).json({message:"User updated",updatedata:updateduser})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error",error})
        
    }
}
const jwt = require("jsonwebtoken");


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("LOGIN BODY:", req.body); // debug

    // 🔹 check if user exists
    const user = await usertable.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // 🔹 check password
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // 🔹 generate token
    const token = jwt.sign(
      { id: user._id },
      "claims",
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error); // 🔥 VERY IMPORTANT
    res.status(500).json({ message: "Server error" });
  }
};


// const getprofile=async(req,res)=>{
//     try {
//         const {id}=req.params
//         const body=req.body
//         const updateduser=await usertable.findById(req.)
//         console.log(updateduser)
//         res.status(201).json({message:"User updated",updatedata:updateduser})
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({message:"Server error",error})
        
//     }
// }
module.exports={registeruser,getuser,deleteuser,updateuser,loginUser}