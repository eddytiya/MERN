const express = require('express');
const empModel = require('../model/empModel');


const showEmp=async(req,resp)=>{
    try {
        const data=await empModel.find();
        resp.render("show",{data})
    } catch (error) {
        console.log(error);
    }
}

const addForm=(req,resp)=>{
    resp.render("add")
}

const addEmp=async(req,resp)=>{
    try {
        const data = new empModel({
            name:req.body.name,
            salary:req.body.salary,
            dept:req.body.dept
        })
        await data.save();
        resp.redirect("/showEmp")
    } catch (error) {
        console.log(error);
    }
}

const updateEmp = async (req, resp) => {
    try {

        await empModel.findByIdAndUpdate(req.params.id,{
                name: req.body.name,
                salary: req.body.salary,
                dept: req.body.dept
            });

        resp.redirect("/showEmp");

    } catch (error) {
        console.log(error);
    }
}

const deleteEmp = async (req,resp)=>{
    try {
        await empModel.findByIdAndDelete(req.params.id)
        resp.redirect("/showEmp")
    } catch (error) {
        console.log(error);
    }
}
const editForm = async (req, resp) => {
    try {
        const data = await empModel.findById(req.params.id);

        resp.render("edit", { data });

    } catch (error) {
        console.log(error);
    }
}
module.exports={showEmp,addEmp,addForm,updateEmp,deleteEmp,editForm}