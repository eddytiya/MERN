const express = require("express");

const {
    addProfile,
    editForm,
    updateProfile,
    deleteProfile,
    addForm
} = require("../Controller/profileController");

const router = express.Router();

// Open Add Profile Page
router.get("/addProfile", addForm);

// Save Profile
router.post("/addProfile", addProfile);

// Open Edit Page
router.get("/edit/:id", editForm);

// Update Profile
router.put("/update/:id", updateProfile);

// Delete Profile
router.delete("/delete/:id", deleteProfile);

module.exports = router;