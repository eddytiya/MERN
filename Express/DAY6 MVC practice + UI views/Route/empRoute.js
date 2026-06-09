const express = require('express');
const {showEmp,addEmp,updateEmp,deleteEmp,searchEmp,addForm}=require('../Controller/EmpController')



console.log("showEmp:", typeof showEmp);
console.log("addEmp:", typeof addEmp);
console.log("updateEmp:", typeof updateEmp);
console.log("deleteEmp:", typeof deleteEmp);
console.log("searchEmp:", typeof searchEmp);
console.log("addForm:", typeof addForm);

const router=express.Router()
router.get("/showEmp",showEmp)
// 8
router.get("/addEmp",addForm)
router.post("/addEmp", addEmp);
router.patch("/updateEmp/:id",updateEmp)
router.delete("/deleteEmp/:id",deleteEmp)
router.get("/searchEmp/:id",searchEmp)

module.exports=router
