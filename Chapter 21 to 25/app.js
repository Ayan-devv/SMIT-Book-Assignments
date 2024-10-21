// 1. Program to take two user inputs for first and last name and merge them
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName);  // Greet the user

// 2. Program to take user input for mobile model and display its length
var mobileModel = prompt("Enter your favorite mobile phone model:");
document.write("Your favorite phone is: " + mobileModel + "<br>");
document.write("Length of string: " + mobileModel.length + "<br>");

// 3. Program to find the index of letter "n" in the word "Pakistani"
var word = "Pakistani";
var indexOfN = word.indexOf("n");
document.write("Index of 'n' in Pakistani: " + indexOfN + "<br>");

// 4. Program to find the last index of letter "l" in the phrase "Hello World"
var phrase = "Hello World";
var lastIndexOfL = phrase.lastIndexOf("l");
document.write("Last index of 'l' in 'Hello World': " + lastIndexOfL + "<br>");

// 5. Program to find the character at the 3rd index in the word "Pakistani"
var charAt3rdIndex = word.charAt(3);
document.write("Character at 3rd index in 'Pakistani': " + charAt3rdIndex + "<br>");

// 6. Repeat Q1 using string concat() method
var fullNameUsingConcat = firstName.concat(" ", lastName);
alert("Hello, " + fullNameUsingConcat);  // Greet the user using concat method

// 7. Program to replace "Hyder" with "Islam" in the word "Hyderabad"
var city = "Hyderabad";
var replacedCity = city.replace("Hyder", "Islam");
document.write("City after replacement: " + replacedCity + "<br>");

// 8. Program to replace all occurrences of "and" with "&"
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replacedMessage = message.replace(/and/g, "&");
document.write("Message after replacement: " + replacedMessage + "<br>");

// 9. Program to convert a string "472" to a number and display the values & types
var strNum = "472";
var num = Number(strNum);
document.write("Value: " + strNum + "<br>");
document.write("Type: " + typeof strNum + "<br>");
document.write("Value after conversion: " + num + "<br>");
document.write("Type after conversion: " + typeof num + "<br>");

// 10. Program to take user input and convert it to capital letters
var userInput = prompt("Enter some text:");
var upperCaseInput = userInput.toUpperCase();
document.write("Input in capital letters: " + upperCaseInput + "<br>");

// 11. Program to take user input and convert it to title case
var titleCaseInput = userInput.toLowerCase().split(" ");
for (var i = 0; i < titleCaseInput.length; i++) {
    titleCaseInput[i] = titleCaseInput[i].charAt(0).toUpperCase() + titleCaseInput[i].slice(1);
}
document.write("Input in title case: " + titleCaseInput.join(" ") + "<br>");

// 12. Program to convert a number to a string and remove the dot
var num = 35.36;
var numString = num.toString().replace(".", "");
document.write("Number as a string without dot: " + numString + "<br>");

// 13. Program to check username for invalid characters
var username = prompt("Enter your username:");
var invalidChars = ["@", ".", ",", "!"];
var isValid = true;

for (var i = 0; i < invalidChars.length; i++) {
    if (username.includes(invalidChars[i])) {
        isValid = false;
        break;
    }
}
if (!isValid) {
    alert("Please enter a valid username without special characters [@ . , !]");
} else {
    alert("Username is valid");
}

// 14. Case insensitive search in an array of bakery items
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var itemToSearch = prompt("What do you want to order?").toLowerCase();
var found = false;

for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === itemToSearch) {
        found = true;
        break;
    }
}
if (found) {
    alert(itemToSearch + " is available in our bakery.");
} else {
    alert("We are sorry, " + itemToSearch + " is not available in our bakery.");
}

// 15. Program to validate password based on specific criteria
var password = prompt("Enter your password:");
var isValidPassword = true;

if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    isValidPassword = false;
} else if (!isNaN(password.charAt(0))) {
    alert("Password should not start with a number.");
    isValidPassword = false;
} else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
    alert("Password must contain both alphabets and numbers.");
    isValidPassword = false;
}

if (isValidPassword) {
    alert("Password is valid.");
}

// 16. Program to convert string to array using split method
var university = "University of Karachi";
var universityArray = university.split("");
for (var i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i] + "<br>");
}

// 17. Program to display the last character of user input
var lastChar = userInput.charAt(userInput.length - 1);
document.write("Last character of your input: " + lastChar + "<br>");

// 18. Program to count occurrences of the word "the" in a string
var text = "The quick brown fox jumps over the lazy dog.";
var occurrences = (text.match(/the/gi) || []).length;
document.write("Number of occurrences of 'the': " + occurrences + "<br>");
