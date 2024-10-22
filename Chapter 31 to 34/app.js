// Program 1: Display the current date and time.
function program1() {
    let currentDate = new Date();
    console.log("Current Date and Time: " + currentDate);
}

// Program 2: Alert the current month in words (e.g., December).
function program2() {
    let currentDate = new Date();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentMonth = monthNames[currentDate.getMonth()];
    alert("Current Month: " + currentMonth);
}

// Program 3: Alert the first 3 letters of the current day (e.g., Sun for Sunday).
function program3() {
    let currentDate = new Date();
    let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let currentDay = dayNames[currentDate.getDay()];
    alert("Today is: " + currentDay);
}

// Program 4: Display a message “It’s Fun day” if it’s Saturday or Sunday.
function program4() {
    let currentDate = new Date();
    let currentDay = currentDate.getDay();
    if (currentDay === 0 || currentDay === 6) {
        alert("It's Fun day!");
    }
}

// Program 5: Show message based on the day of the month.
function program5() {
    let currentDate = new Date();
    let currentDayOfMonth = currentDate.getDate();
    if (currentDayOfMonth < 16) {
        console.log("First fifteen days of the month");
    } else {
        console.log("Last days of the month");
    }
}

// Program 6: Calculate minutes since midnight, Jan. 1, 1970.
function program6() {
    let now = new Date();
    let minutesSince1970 = Math.floor(now.getTime() / (1000 * 60));
    console.log("Minutes since midnight, Jan. 1, 1970: " + minutesSince1970);
}

// Program 7: Test if it's AM or PM.
function program7() {
    let now = new Date();
    let hours = now.getHours();
    if (hours < 12) {
        alert("It's AM");
    } else {
        alert("It's PM");
    }
}

// Program 8: Create a Date object for the last day of the last month of 2020.
function program8() {
    let laterDate = new Date(2020, 11, 31); // December 31, 2020
    console.log("Later Date: " + laterDate);
}

// Program 9: Calculate days passed since 1st Ramadan (June 18, 2015).
function program9() {
    let ramadanDate = new Date(2015, 5, 18); // June 18, 2015
    let today = new Date();
    let timeDiff = today - ramadanDate;
    let daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    alert("Days passed since 1st Ramadan: " + daysPassed);
}

// Program 10: Calculate seconds between the reference date and the beginning of 2015.
function program10() {
    let referenceDate = new Date();
    let startOf2015 = new Date(2015, 0, 1); // January 1, 2015
    let secondsElapsed = Math.floor((referenceDate - startOf2015) / 1000);
    console.log("Seconds elapsed since the beginning of 2015: " + secondsElapsed);
}

// Program 11: Reset the date object an hour ahead and display.
function program11() {
    let currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + 1);
    console.log("Date object an hour ahead: " + currentDate);
}

// Program 12: Reset the date object to 100 years back.
function program12() {
    let currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 100);
    alert("Date 100 years back: " + currentDate);
}

// Program 13: Ask the user for their age and calculate birth year.
function program13() {
    let age = prompt("Enter your age:");
    let currentYear = new Date().getFullYear();
    let birthYear = currentYear - age;
    console.log("Your birth year is: " + birthYear);
}

// Program 14: Generate a K-Electric bill.
function program14() {
    let customerName = "John Doe";
    let currentMonth = new Date().toLocaleString('default', { month: 'long' });
    let numberOfUnits = 350;
    let chargesPerUnit = 12;
    let netAmountPayable = numberOfUnits * chargesPerUnit;
    let latePaymentSurcharge = 100;
    let grossAmountPayable = netAmountPayable + latePaymentSurcharge;

    console.log("Customer Name: " + customerName);
    console.log("Current Month: " + currentMonth);
    console.log("Number of Units: " + numberOfUnits);
    console.log("Charges per Unit: " + chargesPerUnit);
    console.log("Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2));
    console.log("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2));
    console.log("Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2));
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
program9();
program10();
program11();
program12();
program13();
program14();
