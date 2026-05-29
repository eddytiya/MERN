const express = require('express');

const app=express()
app.use(express.json())

app.post("/emp",(req,resp)=>{
    const data =  req.body;
    console.log(data);
    resp.json(data)
    
})



app.listen(4002,(req,resp)=>{
    console.log("running......");
    
})