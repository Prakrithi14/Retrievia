const mongoose=require('mongoose');
const DBCONNECTION_URL='mongodb://127.0.0.1:27017/lostfounddb' 

const dbconnection=async()=>{
    try {
        await mongoose.connect(DBCONNECTION_URL)
        console.log("Database Connection established Successfully!!" )
    } catch (error) {
      console.log(error)  
    }
}
 module.exports=dbconnection;