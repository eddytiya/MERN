const mongoose = require('mongoose');


const connectDB=()=>{
    mongoose.connect("mongodb://localhost:27017/h2").then(() => {
        console.log("connected");                
    }).catch((err) => {
        console.log(err);        
  });
}


const empSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    sal:{
        type:Number,
        required:true,
        min:10000
    },
    department:{
        type:String,
        required:true,
        enum:["HR","IT","ACCT"]
    }
},{timestamp:true})


const empModel=mongoose.model("emp",empSchema)

module.exports={
    empModel,
    connectDB
}