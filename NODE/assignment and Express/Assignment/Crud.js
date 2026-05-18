const mongoose = require('mongoose');

//create connection
const connectDB=()=>{
    mongoose.connect("mongodb://localhost:27017/h2")

    .then(() => {
        console.log("connected");
        
    }).catch((err) => {
        console.log(err);     
    });
}

connectDB()



//create Schema and model

const empSchema=mongoose.Schema({

    
    name:{
        type:String,
        unique:true,
        required:true
        
    },

    
    sal:{
        type:Number,
        min:1000,
        max:5000,

        
        required:true
    }
})

const empModel=mongoose.model("emp",empSchema);

async function displayEmployee() {
    try{
        const data = await empModel.find();
        console.log(data);
        
    }catch(error){
        console.log(error);
        
    }
    
}

displayEmployee()