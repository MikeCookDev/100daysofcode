//One Number
var input = prompt("Please type a number");
var topNumber = parseInt(input);
var randomNumber= Math.floor(Math.random() * topNumber) + 1;
var message = "<p>" + randomNumber + "  is a number between 1 and " + topNumber + ".</p>";
document.write(message);

//set between two numbers
var input1 = prompt("Please type a starting number");
var bottomNumber = parseInt(input1);
var inputTwo = prompt("Please type an ending number");
var topNumberTwo = parseInt(inputTwo);
var randomNumberTwo= Math.floor(Math.random() * (topNumberTwo - bottomNumber + 1)) + bottomNumber;
var messageTwo = "<p>" + randomNumberTwo + "  is a number between " + bottomNumber + " and " + topNumberTwo + ".</p>";
document.write(messageTwo);
