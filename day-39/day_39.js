//Using Parameters

function sayMorning(name){
	alert("Good Morning," + name);
}

sayMorning(" Mike")
//Alerts"Good Morning,Mike"

function sayHello(name){
	document.write("Hello, " + name);
}

sayHello(" Mike<br>");
sayHello(" Megan<br>");
sayHello(" Iris<br>");
sayHello(" Apollo<br>");

//--------------------------------------
//Multiple Parameters

function sayHi(name,age){
	document.write(name+ " is " +age+ " years old.<br>");
}
 sayHi("Iris",4);
 sayHi("Apollo",3);
 //Outputs "Iris is 4 years old."

 //-------------------------------------------
 //Return Statement

 function myFunction(a,b){
 	return a*b;
 }
 var x=myFunction(8,9);
 document.write(x);
 //Return value will end up in x
 //x equals 72

document.write("<br>");

function addNumbers(d,e){
	var f = d+e;
	return f;
}
document.write(addNumbers(13,7));
//Outputs 20

//----------------------------------------
//The Alert Box

alert("Do you really want to leave this page?");

//display line breaks

alert("Hello\nHow are you?");

//----------------------------------------
//The Prompt Box

var user=prompt("Please enter your name");
alert(user);

//----------------------------------------
//The Confirm Box

var result=confirm("Do you really want to leave this page?");
if(result==true){
	alert("Thanks for visiting");
}
else{
	alert("Thanks for staying with us");
}
