function getRandomNumber( upper ) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1; 
  return randomNumber;
}

/*
console.log( getRandomNumber (5) );
console.log( getRandomNumber(100) );
console.log( getRandomNumber(10000) );
console.log( getRandomNumber(2) );
*/



/*
function goToCoffeeShop(drink, pastry){
	alert (drink + " and " + pastry + " are on the way!");
}

goToCoffeeShop("Chamomile Tea", "crumpets");*/

function getArea(width,length, unit){
	var area = width * length;
	return area + " " + unit;
}
console.log(getArea(10, 20, 'sq ft' ));

/*
function max( one, two ) {
  if (one > two ) {
    return one;
} else {
  return two;
}
}*/

function max( one, two ) {
  if (one > two ) {
    return one;
} else {
  return two;
}
}
alert(max(8,7));