const mongoose = require('mongoose');

const empSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        min:20000,
        max:100000,
        required:true        
    },
    dept:{
        type:String,
        enum:["IT","HR","ACCT"],
        required:true
    },
    address:{
        type:String,
        default:"Mumbai"
        
    }
},{timestamps:true})


const empModel=mongoose.model("emp12",empSchema)
module.exports=empModel