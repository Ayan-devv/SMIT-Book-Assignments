// Program 1: Take a positive integer from user and display number, round, floor, and ceil values.
function program1() {
    let num = prompt("Enter a positive integer:");
    num = parseFloat(num);

    // Display original number
    console.log("Original Number: " + num);

    // Round off value
    console.log("Round off value: " + Math.round(num));

    // Floor value (largest integer less than or equal to the given number)
    console.log("Floor value: " + Math.floor(num));

    // Ceil value (smallest integer greater than or equal to the given number)
    console.log("Ceil value: " + Math.ceil(num));
}

// Program 2: Take a negative floating-point number and display number, round, floor, and ceil values.
function program2() {
    let num = prompt("Enter a negative floating-point number:");
    num = parseFloat(num);

    // Display original number
    console.log("Original Number: " + num);

    // Round off value
    console.log("Round off value: " + Math.round(num));

    // Floor value
    console.log("Floor value: " + Math.floor(num));

    // Ceil value
    console.log("Ceil value: " + Math.ceil(num));
}

// Program 3: Display the absolute value of a number.
function program3() {
    let num = prompt("Enter a number to find its absolute value:");
    num = parseFloat(num);

    // Absolute value (distance from zero)
    console.log("Absolute value: " + Math.abs(num));
}

// Program 4: Simulate a dice using random() method.
function program4() {
    let diceValue = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
    console.log("Dice value: " + diceValue);
}

// Program 5: Simulate a coin toss using random() method.
function program5() {
    let coinValue = Math.random() < 0.5 ? "Heads" : "Tails"; // 50/50 chance for heads or tails
    console.log("Coin Toss: " + coinValue);
}

// Program 6: Display a random number between 1 and 100.
function program6() {
    let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    console.log("Random number between 1 and 100: " + randomNumber);
}

// Program 7: Ask user for weight and parse the input, displaying it in the browser.
function program7() {
    let weight = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs):");

    // Extract the number part from the input using parseFloat
    let parsedWeight = parseFloat(weight);
    console.log("Your weight is: " + parsedWeight + " kilograms");
}

// Program 8: Store a random secret number from 1 to 10 and ask user to guess it.
function program8() {
    let secretNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    let userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

    if (userGuess === secretNumber) {
        console.log("Congratulations! You guessed the secret number.");
    } else {
        console.log("Sorry, the secret number was: " + secretNumber);
    }
}

// Run all programs
program1();
program2();
program3();
program4();
program5();
program6();
program7();
program8();
