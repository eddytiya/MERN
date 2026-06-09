const express = require('express');
const {connectDb}=require("./db")
const empRoute = require('./route/empRoute');
//new
const methodOverride = require('method-override');

connectDb();
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//new
app.use(methodOverride("_method"))
app.set("view engine","ejs")

app.use("/",empRoute)

app.listen(4449,()=>{
    console.log("running......");
    
})