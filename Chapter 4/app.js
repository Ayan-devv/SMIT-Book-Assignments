// Declare 3 variables in one statement
var x = 1, y = 2, z = 3;

// Declare 5 legal & 5 illegal variable names
// Legal
var name;
var $price;
var _value;
var firstName;
var age1;

// Illegal (commented out to avoid errors)
// var 1name; // starts with a number
// var @price; // contains special character
// var first-name; // contains hyphen
// var var; // reserved keyword
// var my name; // contains space

// Display the rules in the browser
document.write("Rules for naming JS variables");
document.write("Variable names can only contain letters, numbers, $, and _.");
document.write("Variables must begin with a letter, $, or _. For example $name, _name, or name.");
document.write("Variable names should not be JS keywords.");