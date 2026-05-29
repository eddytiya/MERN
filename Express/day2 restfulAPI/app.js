const express = require('express');
const {connectDB,empModel} = require('./db');

const app = express()
app.use(express.json())

connectDB()


//show

app.get("/empshow",async (req,resp)=>{
    try{
        const data =await empModel.find()
        resp.json(data)
    }catch(err){
        console.log(err);
        
    }
})


//add employee

app.post("/empadd",async (req,resp)=>{
    try{
        const data = new empModel({
            name:req.body.name,
            sal:req.body.sal,
            department:req.body.department
        })
        const result =await data.save();
        console.log("data inserted");
        
    }catch(err){
        console.log(err);
        
    }
})

//update employee

app.patch("/empupdate/:id",async (req,resp)=>{
    try {
        const result= await empModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        resp.json(result)
    } catch (error) {
        console.log(error);
                
    }
})

//delete employee

app.delete("/empdel/:id",async(req,resp)=>{
    try {
        const data=await empModel.findByIdAndDelete(req.params.id);
        resp.json(data)
        
    } catch (error) {
        console.log(error);
          
    }
})

//search employee



app.listen(3003,(req,resp)=>{
    console.log("running.....");
    
})