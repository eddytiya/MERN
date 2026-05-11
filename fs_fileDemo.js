const fs = require('fs');

//readfile
fs.readFile("./modules/text.txt",(err,data)=>{
    if(err){
        console.log(err);     
    }else{
        console.log(data.toString());
        
    }
})


//writeFile
data="heloo heloouu";

fs.writeFile("./modules/text1.txt",data,(err)=>{
    if(err){
        console.log(err);     
    }else{
        console.log("file written");
        
    }
})

//appendFile


data1="heloo heloouu hies";

fs.appendFile("./modules/text1.txt",data1,(err)=>{
    if(err){
        console.log(err);     
    }else{
        console.log("file Append");
        
    }
})


//delete

fs.unlink("./modules/text1.txt",(err)=>{
    if(err){
        console.log(err);     
    }else{
        console.log("file Append");
        
    }
})
