// const jwt=require('jsonwebtoken')
// const SECRET_KEY="claims"
// const authuser=async(req,res,next)=>{
//     try {
//         const usertoken=await req.header("auth-token")
//         console.log("HEADER:", req.headers.authorization);
//         if(usertoken){
//             const userinfo=await jwt.verify(usertoken,SECRET_KEY)
//             console.log(userinfo)
//             req.userid=userinfo.id;
//             next();
//         }
//         else{
//             return res.status(401).json({
//   success: false,
//   message: "unauthorized user token"
// });
//         }   
//     } 
//     catch (error) {
//         console.log(error)
//         res.json({
//             success:false,
//             message:"server error"
//         })
//     }

// }
// module.exports=authuser
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const header = req.headers.authorization;

    console.log("HEADER:", header);

    if (!header) {
      return res.status(401).json({ message: "No token" });
    }

    const token = header.split(" ")[1];

    console.log("TOKEN:", token);

    const decoded = jwt.verify(token, "secretkey123");

    console.log("DECODED:", decoded);

    req.user = decoded;

    next();

  } catch (error) {
    console.log("AUTH ERROR:", error.message); // 👈 THIS IS KEY
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = auth;