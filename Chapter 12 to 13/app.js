function checkCharacter() {
    let char = prompt("Enter a character:");
    let ascii = char.charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) {
        return "Uppercase Letter";
    } else if (ascii >= 97 && ascii <= 122) {
        return "Lowercase Letter";
    } else if (ascii >= 48 && ascii <= 57) {
        return "Number";
    } else {
        return "Other Character";
    }
}
console.log(checkCharacter());



function compareIntegers() {
    let a = parseInt(prompt("Enter the first integer:"));
    let b = parseInt(prompt("Enter the second integer:"));
    if (a > b) {
        return `${a} is larger`;
    } else if (a < b) {
        return `${b} is larger`;
    } else {
        return "Both numbers are equal";
    }
}
console.log(compareIntegers());



function checkNumberSign() {
    let num = parseFloat(prompt("Enter a number:"));
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log(checkNumberSign());



function isVowel() {
    let char = prompt("Enter a character:");
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}
console.log(isVowel());




let correctPassword = "12345678";
function validatePassword() {
    let inputPassword = prompt("Enter your password:");
    if (!inputPassword) {
        return "Please enter your password";
    } else if (inputPassword === correctPassword) {
        return "Correct! The password you entered matches the original password";
    } else {
        return "Incorrect password";
    }
}
console.log(validatePassword());


