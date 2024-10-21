var studentNames = [];

var studentNames = new Array();

var studentNames = new Array();


var stringArray = ["apple", "banana", "cherry"];


var numberArray = [10, 20, 30];


var booleanArray = [true, false, true];


var mixedArray = ["apple", 10, true];


var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("<h1>Qualifications in Pakistan:</h1>");
document.write(qualifications.join(", "));



var studentNames = ["Ali", "Sara", "Ahmed"];
var studentScores = [450, 400, 380];
var totalMarks = 500;

for (var i = 0; i < studentNames.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;
    document.write(studentNames[i] + " scored " + studentScores[i] + " with " + percentage + "%<br>");
}


var colors = ["Red", "Green", "Blue"];
document.write("Colors: " + colors.join(", ") + "<br>");

// a. Add color to the beginning
var newColorStart = prompt("Enter a color to add at the beginning:");
colors.unshift(newColorStart);
document.write("Updated Colors: " + colors.join(", ") + "<br>");

// b. Add color to the end
var newColorEnd = prompt("Enter a color to add at the end:");
colors.push(newColorEnd);
document.write("Updated Colors: " + colors.join(", ") + "<br>");

// c. Add two more colors to the beginning
colors.unshift("Yellow", "Purple");
document.write("Updated Colors: " + colors.join(", ") + "<br>");

// d. Delete the first color
colors.shift();
document.write("Updated Colors after deleting the first color: " + colors.join(", ") + "<br>");

// e. Delete the last color
colors.pop();
document.write("Updated Colors after deleting the last color: " + colors.join(", ") + "<br>");

// f. Add a color at user-defined position
var colorIndex = prompt("Enter the index at which to add a color:");
var colorName = prompt("Enter the color name to add:");
colors.splice(colorIndex, 0, colorName);
document.write("Updated Colors: " + colors.join(", ") + "<br>");

// g. Delete colors from a user-defined position
var deleteIndex = prompt("Enter the index from which to delete color(s):");
var deleteCount = prompt("Enter how many colors to delete:");
colors.splice(deleteIndex, deleteCount);
document.write("Updated Colors: " + colors.join(", "));



var scores = [320, 230, 480, 120];
scores.sort();
document.write("Sorted Scores: " + scores.join(", "));


var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(1, 4);
document.write("Selected Cities: " + selectedCities.join(", "));



var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");
document.write("String: " + singleString);



var fifoArray = [];
fifoArray.push("Value 1");
fifoArray.push("Value 2");
fifoArray.push("Value 3");
document.write(fifoArray.shift());  // Outputs "Value 1"


var lifoArray = [];
lifoArray.push("Value 1");
lifoArray.push("Value 2");
lifoArray.push("Value 3");
document.write(lifoArray.pop());  // Outputs "Value 3"



var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");
