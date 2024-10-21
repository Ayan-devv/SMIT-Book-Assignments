// 1. Declare and initialize an empty multidimensional array (Array of arrays)
var multiArray = [[], []];

// 2. Declare and initialize a multidimensional array representing the following matrix:
// 1  2  3
// 4  5  6
// 7  8  9
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 3. Write a program to print numeric counting from 1 to 10
document.write("<h2>Counting from 1 to 10:</h2>");
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

// 4. Write a program to print multiplication table of any number using for loop.
// Table number & length should be taken as an input from user.
var tableNumber = parseInt(prompt("Enter the number to generate its table:"));
var tableLength = parseInt(prompt("Enter the length of the table:"));

document.write("<h2>Multiplication Table of " + tableNumber + ":</h2>");
for (var i = 1; i <= tableLength; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}

// 5. Write a program to print items of the following array using for loop
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("<h2>Fruits List:</h2>");
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

// 6. Generate the following series in your browser
document.write("<h2>Series Generation:</h2>");

// a. Counting from 1 to 15
document.write("<b>Counting:</b><br>");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}

// b. Reverse counting from 10 to 1
document.write("<br><b>Reverse Counting:</b><br>");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}

// c. Even numbers from 0 to 20
document.write("<br><b>Even Numbers:</b><br>");
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}

// d. Odd numbers from 1 to 19
document.write("<br><b>Odd Numbers:</b><br>");
for (var i = 1; i < 20; i += 2) {
    document.write(i + ", ");
}

// e. Series: 2k to 20k
document.write("<br><b>Series:</b><br>");
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}

// 7. Write a program to enable “search by user input” in an array.
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order?");
document.write("<h2>Search in Bakery:</h2>");
if (A.includes(userInput)) {
    document.write(userInput + " is available at our bakery.");
} else {
    document.write("We are sorry, " + userInput + " is not available at our bakery.");
}

// 8. Write a program to identify the largest number in the given array
var A = [24, 53, 78, 91, 12];
var largest = Math.max(...A);
document.write("<h2>The largest number in the array:</h2>");
document.write("The largest number is " + largest);

// 9. Write a program to identify the smallest number in the given array
var smallest = Math.min(...A);
document.write("<h2>The smallest number in the array:</h2>");
document.write("The smallest number is " + smallest);

// 10. Write a program to print multiples of 5 ranging from 1 to 100
document.write("<h2>Multiples of 5 from 1 to 100:</h2>");
for (var i = 5; i <= 100; i += 5) {
    document.write(i + ", ");
}
