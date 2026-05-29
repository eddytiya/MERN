const express = require('express');
const {showEmp,addEmp,updateEmp,deleteEmp,searchEmp}=require('../controller/empController')


const router=express.Router()
router.get("/showEmp",showEmp)
router.post("/addEmp",addEmp)
router.patch("/updateEmp/:id",updateEmp)
router.delete("/deleteEmp/:id",deleteEmp)
router.get("/searchEmp/:id",searchEmp)

module.exports=router
