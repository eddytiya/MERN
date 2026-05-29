const express = require('express');
const path = require('path');
const app= express();

app.get("/",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"views","home.html"))
})
app.get("/about",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"views","about.html"))
})
app.use((req,resp)=>{
    resp.sendFile(path.join(__dirname,"views","error.html"))
})

app.listen(4001,(req,resp)=>{
    console.log("running.......");
    
})