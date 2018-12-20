// quiz begins, no answers correct
var correct = 0;

// ask questions
var answer1 = prompt("Name the Generation 1 Grass Starter");
if ( answer1.toUpperCase() === 'BULBASAUR' ) {
 correct += 1; 
}
var answer2 = prompt("Name the Generation 2 Grass Starter");
if ( answer2.toUpperCase() === 'CHIKORITA' ) {
 correct += 1; 
}
var answer3 = prompt("Name the Generation 3 Grass Starter");
if ( answer3.toUpperCase() === 'TREECKO' ) {
 correct += 1; 
}
var answer4 = prompt("Name the Generation 4 Grass Starter");
if ( answer4.toUpperCase() === 'TURTWIG' ) {
 correct += 1; 
}
var answer5 = prompt("Name the Generation 5 Grass Starter");
if ( answer5.toUpperCase() === 'SNIVY' ) {
 correct += 1; 
}

// output results
document.write("<p>You got " + correct + " out of 5 questions correct.<p>");

// output rank
if ( correct === 5 ) {
  document.write("<p><strong>You earned a Masterball!</strong></p>");
} else if (correct >= 3) {
  document.write("<p><strong>You earned an Ultra Ball.</strong></p>");  
} else if (correct >= 2) {
  document.write("<p><strong>You earned a Great Ball.</strong></p>");  
} else {
  document.write("<p><strong>No awards for you. You need to study your Pokemon.</strong></p>");
}



