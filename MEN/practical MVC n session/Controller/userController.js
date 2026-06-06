const bcryptjs = require('bcryptjs');
const userModel = require('../Model/userModel');
const courseModel=require('../Model/courseModel')

// register
const register = async (req, resp) => {
    try {
        const { name, email, password } = req.body;

        const hashPassword = await bcryptjs.hash(password, 10);
        console.log(hashPassword);

        await userModel.create({
            name,
            email,
            password: hashPassword
        });

        resp.redirect("/login");

    } catch (err) {
        console.log(err);
    }
};

// login
const login = async (req, resp) => {
    try {


        const { name, password } = req.body;

        const user = await userModel.findOne({ name });

        if (user && await bcryptjs.compare(password, user.password)) {

            req.session.name = name;

            return resp.redirect("/dashboard");

        } else {


            return resp.redirect("/login");
        }

    } catch (error) {
        console.log(error);
    }
};

// dashboard
const dashboard = async (req, resp) => {
    try {

        if (!req.session.name) {
            return resp.redirect("/login");
        }

        const data = await courseModel.find();

        resp.render("dashboard", {
            user: req.session.name,
            data: data
        });

    } catch (error) {
        console.log(error);
    }
};

// logout
const logout = async (req, resp) => {


    req.session.destroy(() => {
        resp.redirect("/login");
    });

};

module.exports = {
    register,
    login,
    dashboard,
    logout
};