const fs = require('fs');

fs.readFile("./Assignment/text.txt",(err,data)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log(data.toString());
        
    }
})

fs.writeFile("./Assignment/text1.txt","this is a new file",(err,data)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("written...");
        
    }
})


fs.appendFile("./Assignment/text1.txt"," Append this to the end",(err,data)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("appended...");
        
    }
})


fs.unlink("./Assignment/text1.txt",(err,data)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("deleted successfully");
        
    }
})