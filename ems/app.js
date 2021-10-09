// Title: EMS Assignment
// Author: Evan Durkin
// Date: October 9, 2021


// requires express, http, url path, morgan and assigns all to separate variables
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const Employee = require("./models/employee");
const helmet = require("helmet");
const csrf = require("csurf");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// assigns express and csrf protection
const app = express();
const csrfProtection = csrf({cookie:true});

// set statements
app.set("views", path.resolve(__dirname,"views"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 8080);


// use statements
app.use(logger("short"));
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(req, res, next){
    const token = req.csrfToken();
    res.cookie("XSRF-TOKEN", token);
    res.locals.csrfToken = token;
    next();
});

// routing
app.get("/", function(req, res){
    res.render("index", {
        title: "Evan Durkin | EMS",
        message: "Employee Information"
    });
});

app.get("/new", function(req,res){
    res.render("new", {
        title: "New | EMS",
        message: "Enter New Employee"
    });
});

app.get("/list", function(req, res){
    Employee.find({}, function(error, employees){
        if(error)throw error;
        res.render("list",{
            title: "Employee List",
            employees: employees
        });
    });
});

app.get("/", function (req, res) {
    res.render("index", {
      title: "XSS Prevention Example",
    });
  });

app.get("/view/:queryName", function(req, res) {
    const queryName = req.params["queryName"];
    Employee.find({"firstName": queryName}, function(error, employees){
        if(error)throw error;
        console.log(employees);
        if (employees.length > 0) {
            res.render("view", {
                title: "Employee Record",
                employee: employees
            })
        }
        else {
            res.redirect("/list")
        }
    });
});

app.post("/process", function(req,res){
    if(!req.body.txtFirstName || !req.body.txtLastName){
        res.status(400).send("Entries must have both names filled out.");
        return;
    }
    const firstName = req.body.txtFirstName;
    const lastName = req.body.txtLastName;
  
    // creates new employee 
    let employee = new Employee({
      firstName: firstName,
      lastName: lastName
    });
    employee.save(function(error) {
        if (error) {
          console.log(error);
          throw err;
        } else {
            console.log(firstName + " " + lastName + ' saved successfully!');
            res.redirect('/');
        }
      });
    });

// mongoDB connection string
var mongoDB = "mongodb+srv://bu-user:NRMYxvt57Yb5DQt@buwebdev-cluster-1.a6yhz.mongodb.net/test";

// creates mongo connection
mongoose.connect(mongoDB, {
    useMongoClient: true
});
// mongo Promise object
mongoose.Promise = global.Promise;

// database variable to hold connection
var db = mongoose.connection;

// error handling
db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

// creates server and listens on port 8080
// http.createServer(app).listen(8080,function(){
//     console.log("Application started on port 8080!");
// });

http.createServer(app).listen(app.get("port"), function()
    { console.log("Application started on port" + app.get("port"))});