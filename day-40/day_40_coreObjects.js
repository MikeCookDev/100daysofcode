//Core Objects
//Arrays
/*var courses=new Array("HTML","CSS","JS");
var course=courses[0];//HTML
courses[1]="C++";//Changes the second element

//Access the Array
document.write(courses[2]);//Outputs"JS"

//-----------------------------------------
//Other ways to create Arrays
var courses = newArray(3);
courses[0]="HTML";
courses[1]="CSS";
courses[2]="JS";

//or
//Using this array means you can fill and add to it at any time
var courses = new Array();
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";
courses[3] = "C++";

//Array Literal

var courses=["HTML","CSS","JS","C++"];*/

//Array Length Property
//An array's length property returns the number of it's elements.

/*var courses = ["HTML","CSS","JS","C++"];
document.write(courses.length);
//Outputs 4*/

//Combining Arrays
//JavaScript's concat() method allows you to join arrays and create an entirely new array.

var c1 = ["HTML","CSS"];
var c2 = ["JS","C++"];
var courses = c1.concat(c2);

//-------------------------------------------
//Math Object

document.write(Math.PI);
//Outputs 3.141592653589793
document.write("<br>");

document.write(Math.E);
//Outputs Euler's constant
document.write("<br>");

document.write(Math.LN2);
//Outputs Natural log of the value 2
document.write("<br>");

document.write(Math.LN10);
//Outputs Natural log of the value 10
document.write("<br>");

document.write(Math.LOG2E);
//Outputs the base 2 log of Euler's constant(E)
document.write("<br>");

document.write(Math.LOG10E);
//Outputs the base 10 log of Euler's constant(E)
document.write("<br>");


//create a program that will ask the user to input a number and alert its square root.

var n=prompt("Enter a number","");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);

//--------------------------------------------------------------
//setInterval
/*The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
It will continue calling the function until clearInterval() is called or the window is closed.*/

/*function myAlert(){
	alert("Hi");
}
setInterval(myAlert,3000);//This will call the myAlert function every 3 seconds (1000 ms = 1 second).
*/
//The date Object
function printTime(){
	var d= new Date();
	var hours=d.getHours();
	var mins=d.getMinutes();
	var secs=d.getSeconds();
	document.body.innerHTML=hours+ ":" +mins+ ":" +secs;
}
setInterval(printTime,1000);


