var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write('There are ' + secondsPerDay + ' seconds in a day <br>');
var yearsAlive = 31;
var secondsAlive = secondsPerDay * daysPerWeek * weeksPerYear * yearsAlive;
document.write ('I have been alive for more than ' + secondsAlive + ' seconds. <br>');


var wholesalePrice = 5.45;
var retailPrice = 9.99;
var quantity = 47;
var salesTotal = retailPrice * quantity;
document.write('The sales total is ' + salesTotal + '. <br>');
var profit = salesTotal - wholesalePrice * quantity;
document.write('The store profit is ' + profit + '. <br>');
var profitPerUnit = profit / quantity;
document.write('The total profit will be ' + profitPerUnit + '. <br>' );