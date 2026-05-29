const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set("view engine","ejs");

app.get("/",(req,resp)=>{
    const a = 100;
    resp.render("index",{a});
});

app.get("/demo",(req,resp)=>{
    resp.render("newindex")
})

app.get("/products",(req,resp)=>{
    const pro=[
        {id:1,name:"Tv",price:40000},
        {id:2,name:"apple",price:80000},
        {id:3,name:"Ac",price:30000},
        {id:4,name:"Fridge",price:40000},
        {id:5,name:"Washing Machine",price:30000},
    ]

    resp.render("product",{pro})
})



app.listen(4000,(req,resp)=>{
    console.log("rinning....");
});