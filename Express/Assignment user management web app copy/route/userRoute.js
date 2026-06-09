const express = require('express');
const { register,login,dashboard,logout } = require('../controller/userController');

const router=express.Router()
router.get("/", (req,res)=>{
    res.redirect("/register");
});

router.get("/register",(req,res)=>{
    res.render("register");
});

router.post("/register",register);

router.get("/login",(req,res)=>{
    res.render("login");
});

router.post("/login",login);

router.get("/dashboard",dashboard);

router.get("/logout",logout);

module.exports=router
