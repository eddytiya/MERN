

const userModel = require("../Model/usermodel");
const bcryptjs = require("bcryptjs");

// register
const register = async (req, resp) => {
    try {
        const { uname, email, password } = req.body;

        const hashPassword = await bcryptjs.hash(password, 10);
        console.log(hashPassword);

        await userModel.create({
            uname,
            email,
            password: hashPassword
        });
//change1
        resp.redirect("/login")
        
    } catch (error) {
        console.log(error);
    }
};

// Login
const login = async (req, resp) => {
    try {
        const { uname, email, password } = req.body;

        // 1. find if user exists
        const user = await userModel.findOne({ uname });

        // 2. compare passwords
        if (user && await bcryptjs.compare(password, user.password)) {
            // session data store
            req.session.name = uname;
            resp.redirect("/dashboard");
        } else {
            
        }resp.redirect("/login")
    } catch (error) {
        console.log(error);
    }
};

// dashboard
const dashboard = async (req, resp) => {
    if (!req.session.name) {
        resp.redirect("/login")
    } else {
        resp.render("dashboard",{data:req.session.name});
    }
};

// logout
const logout = async (req, resp) => {
    req.session.destroy(() => {
        resp.redirect("/login")
    });
};

module.exports = {
    register,
    login,
    dashboard,
    logout
};