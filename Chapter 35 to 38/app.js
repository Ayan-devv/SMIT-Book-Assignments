// Program 1: Function that displays current date & time
function displayDateTime() {
    let currentDate = new Date();
    console.log("Current Date and Time: " + currentDate);
}

// Program 2: Function that takes first & last name and greets the user
function greetUser(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    console.log("Hello, " + fullName + "!");
}


// Program 3: Function that adds two numbers and returns the sum
function addTwoNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

// Program 4: Calculator function that takes three arguments (num1, num2, operator)
function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
    }
    console.log("Result: " + result);
}

// Program 5: Function that squares its argument
function square(number) {
    return number * number;
}

// Program 6: Function that computes the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    else return n * factorial(n - 1);
}

// Program 7: Function that takes start and end number as inputs and displays counting
function displayCounting(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}

// Program 8: Nested function to compute the hypotenuse of a right-angle triangle
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
        return x * x;
    }
    let hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    console.log("Hypotenuse: " + hypotenuse);
}

// Program 9: Function to calculate the area of a rectangle
function calculateArea(width, height) {
    let area = width * height;
    console.log("Area of rectangle: " + area);
}

// Program 10: Function to check whether a string is palindrome
function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    if (str === reversedStr) {
        console.log(str + " is a palindrome");
    } else {
        console.log(str + " is not a palindrome");
    }
}

// Program 11: Function to convert the first letter of each word to uppercase
function capitalizeFirstLetter(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    let capitalizedStr = words.join(' ');
    console.log("Capitalized String: " + capitalizedStr);
}

// Program 12: Function to find the longest word in a string
function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    console.log("Longest word: " + longestWord);
}

// Program 13: Function to count the number of occurrences of a letter in a string
function countLetterOccurrences(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    console.log("Occurrences of " + letter + ": " + count);
}

// Program 14: Geometrizer - Function to calculate circumference and area of a circle
function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference.toFixed(2));
}

function calcArea(radius) {
    let area = Math.PI * radius * radius;
    console.log("The area is " + area.toFixed(2));
}

// Run all the programs with example inputs
displayDateTime(); // Program 1
greetUser("Ayan", "Khan"); // Program 2
console.log("Sum: " + addTwoNumbers(10, 5)); // Program 3
calculator(10, 5, '+'); // Program 4
console.log("Square: " + square(5)); // Program 5
console.log("Factorial: " + factorial(5)); // Program 6
displayCounting(1, 10); // Program 7
calculateHypotenuse(3, 4); // Program 8
calculateArea(5, 7); // Program 9
isPalindrome("madam"); // Program 10
capitalizeFirstLetter("the quick brown fox"); // Program 11
findLongestWord("Web Development Tutorial"); // Program 12
countLetterOccurrences("JSResourceS.com", 'o'); // Program 13
calcCircumference(7); // Program 14
calcArea(7); // Program 14
