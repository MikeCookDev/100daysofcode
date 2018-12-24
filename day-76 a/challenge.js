function getRandomNumber(lower,upper){
	if (isNaN(lower) || isNaN(upper)) {
		throw new Error("One or both of your numbers are not in number format");
	}
		var random = Math.floor(Math.random() * (upper - lower + 1)) + lower;
			return random;
	
	
}
console.log(getRandomNumber (10, 100));
console.log(getRandomNumber(9,78));
console.log(getRandomNumber(1,6));
console.log(getRandomNumber(0,6));
console.log(getRandomNumber('one',6));


