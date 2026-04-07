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