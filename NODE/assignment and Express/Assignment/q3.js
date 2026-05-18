const fs = require('fs');
const http = require('http');


const server= http.createServer((req,resp)=>{

    let data="./Assignment/views/"


    switch (req.url) {
        case "/":
            data+="home.html"        
            break;
        case "/about":
            data+="about.html"        
            break;
        case "/contact":
            data+="contact.html"        
            break;
    
        default:
            data+="error.html"
            break;
    }
    fs.readFile(data,(err,result)=>{
    if(err){
        console.log(err);    
    }else{
        resp.end(result);
        
    }
})
})

server.listen(4400,()=>{
    console.log("running....");
    
})


