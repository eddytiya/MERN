const express = require('express');

const app = express();

app.get("/",(req,resp)=>{
    resp.end("hello")
})

app.get("/about",(req,resp)=>{
    resp.end("about word")
})

app.get("/contact",(req,resp)=>{
    resp.end("contact word")
})

app.post("/contact",(req,resp)=>{
    resp.end("post contant")
})

app.use((req,resp)=>{
    console.log("error");
    resp.end("error")
})

app.listen(4000,(req,resp)=>{
    console.log("running....");
    
})