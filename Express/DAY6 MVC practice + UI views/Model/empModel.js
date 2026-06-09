const mongoose = require('mongoose');

const empSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true,
        min:10000,
        max:25000
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
},{timestamps:true}
)

const empModel=mongoose.model("emp",empSchema)

module.exports=empModel