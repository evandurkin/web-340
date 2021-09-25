// Title: Assignment 7.4
// Author: Evan Durkin
// Date: September 25, 2021

// Requires
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

// Employee Schema requiring first and last name
let employeeSchema = new Schema({
    firstName: {type:String, required: true},
    lastName: {type:String, required: true}
});

let Employee = mongoose.model("Employee", employeeSchema)

// exports employee schema
module.exports = Employee;
module.exports = mongoose.model("Employee", employeeSchema);

