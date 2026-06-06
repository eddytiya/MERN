const express = require('express');
const session = require('express-session')
const methodOverride = require('method-override');
const { connectDB } = require('./db');

const userRoute=require('./route/userRoute')
const courseRoute=require('./route/courseRoute')


connectDB()

const app=express();

app.use(express.json())
app.use(express.urlencoded())

app.use(
    session({
        secret: "asdfghjknol",
        resave: false,
        saveUninitialized: false
    })
)

app.use(methodOverride("_method"));

app.set("view engine","ejs");

app.use("/",userRoute)
app.use("/",courseRoute)

app.listen(4998,()=>{
    console.log("running.....");
    
})