const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');

const { connectDB } = require('./db');

const userRoute = require('./route/userRoute');
const profileRoute = require('./route/profileRoute');

const app = express();

// Database Connection
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session Middleware
app.use(
    session({
        secret: "asdfghjknol",
        resave: false,
        saveUninitialized: false
    })
);

// Method Override Middleware
app.use(methodOverride("_method"));

// View Engine
app.set("view engine", "ejs");

// Routes
app.use("/", userRoute);
app.use("/", profileRoute);

// Server
app.listen(4344, () => {
    console.log("running.....");
});