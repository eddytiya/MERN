const express = require('express');
const { addForm,addEmp,updateEmp,deleteEmp,showEmp,editForm } = require('../controller/empController');


const router = express.Router()

router.get("/",addForm);//form
router.get("/showEmp",showEmp);//Show
router.post("/addEmp",addEmp)//ADD

router.get("/edit/:id", editForm);
router.put("/update/:id", updateEmp);
router.delete("/delete/:id", deleteEmp);
module.exports = router