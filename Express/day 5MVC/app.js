const express = require('express');
const {connectDB}=require("./db")
const router=require("./router/empRoute")
const app=express()

connectDB()

app.use(express.json())
app.use("/",router)

app.listen(4000,(req,resp)=>{
    console.log("running.......");
    
})
