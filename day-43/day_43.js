//While Loop

var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}

//for loop

var myArray = [];
for(var i = 1; i < 6; i++) {
  myArray.push(i);
}

//for loop odd numbers

var myArray = [];

for (var i=1; i<10; i+=2){
  myArray.push(i);
}

//count backwards with for loop
var myArray = [];

for (var i = 9; i > 0; i -=2){
  myArray.push(i);
}

//iterate through an array with a for loop
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++){  
  total += myArr[i];
}

//nesting for loops
function multiplyAll(arr) {
  var product = 1;
  
   for (var i=0; i < arr.length; i++){
    for (var j=0; j < arr[i].length; j++){
      product *= arr[i][j];
    }
  }
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);