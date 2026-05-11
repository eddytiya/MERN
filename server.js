//1.import http

const http = require('http');

//2.create server

const server = http.createServer((req,resp)=>{
    if(req.url==="/"){
        resp.end("home page")
    }else if(req.url==="/about"){
        resp.end("about")
    }else if(req.url==="/contactUs"){
        resp.end("contactUs")
    }else{
        resp.end("Error....")
    }
})



server.listen(3000,()=>{
    console.log("server is running");
    
})