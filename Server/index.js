const express=require('express');
const cors=require('cors');
const dbconnection=require('./db');
const app=express();
const PORTNUMBER=8000;

app.use(express.json());
app.use(cors());

app.listen(PORTNUMBER,()=>{
    console.log(`Server is running in port number:${PORTNUMBER}`);
})
dbconnection();
app.get('/apitest',(req,res)=>{
    res.send("Welcome to Lost and Found API")
})
app.use('/users',require('./Routes/User_Routes'))
app.use('/admins',require('./Routes/Admin_Routes'))
app.use("/items", require('./Routes/Item_Routes'))
app.use("/categories",require('./Routes/Category_Routes'))
app.use("/uploads", express.static("uploads"));