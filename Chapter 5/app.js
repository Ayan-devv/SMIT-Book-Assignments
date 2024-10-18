var favouriteSnack;
var currentAge;
var maximunAge;
var snacksPerDay;

favouriteSnack = "cookies";
currentAge = 15;
maximunAge = 65;
snacksPerDay = 5;

var totalDaysInMaximunAge = 365 * maximunAge;
var totalDaysInCurrentAge = 365 * currentAge;

var totalTimePeriod = totalDaysInMaximunAge - totalDaysInCurrentAge;

var TotalSnackRequired = totalTimePeriod * snacksPerDay;


document.write(`You'll need ${TotalSnackRequired}  ${favouriteSnack}  to last until the ripe old age of ${maximunAge}  `)
