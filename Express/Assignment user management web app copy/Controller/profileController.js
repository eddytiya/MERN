const profileModel = require("../Model/profileModel");

// Show all profiles
const showProfiles = async (req, resp) => {
    try {

        const data = await profileModel.find();

        resp.render("dashboard", {
            user: req.session.name,
            data
        });

    } catch (error) {
        console.log(error);
    }
};

// Add Profile
const addProfile = async (req, resp) => {
    try {

        await profileModel.create({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        });

        resp.redirect("/dashboard");

    } catch (error) {
        console.log(error);
    }
};

// Edit Form
const editForm = async (req, resp) => {
    try {

        const data = await profileModel.findById(req.params.id);

        resp.render("edit", { data });

    } catch (error) {
        console.log(error);
    }
};

// Update Profile
const updateProfile = async (req, resp) => {
    try {

        await profileModel.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age
            }
        );

        resp.redirect("/dashboard");

    } catch (error) {
        console.log(error);
    }
};

// Delete Profile
const deleteProfile = async (req, resp) => {
    try {

        await profileModel.findByIdAndDelete(req.params.id);

        resp.redirect("/dashboard");

    } catch (error) {
        console.log(error);
    }
};
const addForm = (req, resp) => {
    resp.render("addProfile", {
        user: req.session.name
    });
};
module.exports = {
    showProfiles,
    addProfile,
    editForm,
    updateProfile,
    deleteProfile,
    addForm
};