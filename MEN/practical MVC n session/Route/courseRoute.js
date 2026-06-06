const express = require('express');
const { addForm, addCourse, editForm, updateCourse, deleteCourse } = require('../controller/courseController');

const router =express.Router()


router.get("/addCourse",addForm)
router.post("/addCourse",addCourse)
router.get("/edit/:id",editForm)
router.put("/update/:id", updateCourse);
router.delete("/delete/:id", deleteCourse);

module.exports = router;

