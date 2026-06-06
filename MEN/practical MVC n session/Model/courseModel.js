const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    cname:{
        type:String,
        required:true
    },
    tname:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    fees:{
        type:Number,
        min:10000,
        max:100000,
        required:true
    }
},{timestamps:true})

const courseModel=mongoose.model("course",courseSchema)

module.exports=courseModel