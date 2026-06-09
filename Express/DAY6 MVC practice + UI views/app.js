const express = require('express');
const router = require('./Route/empRoute');
const { connectDB } = require('./db');

connectDB()

const app=express()

app.use(express.json())
//9
app.use(express.urlencoded({extended:true}))

//2
app.set("view engine","ejs")
app.use("/",router)




app.listen(4000,(req,resp)=>{
    console.log("running......");
    
})