const express = require('express');
const session = require('express-session');
const { connectDB } = require('./db');
const router = require('./route/userRoute');

const app = express();

connectDB();

app.use(express.json());

// session
app.use(
    session({
        secret: "asdfghjknol",
        resave: false,
        saveUninitialized: false
    })
);


app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}))
app.use("/", router);

app.listen(4044, () => {
    console.log("running.....");
});