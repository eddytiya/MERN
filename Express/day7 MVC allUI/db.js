const mongoose = require('mongoose');

const connectDb=()=>{
    mongoose.connect("mongodb://localhost:27017/emp12")
    .then(() => {
        console.log("connecting...");
        
        
    }).catch((err) => {
        console.log(err);
    });
}

module.exports={connectDb}