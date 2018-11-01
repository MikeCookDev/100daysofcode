//alert("Welcome to day 37!!");

document.write("<h1>JavaScript Practice Page<br></h1>");

var HappyHalloween = "Happy Halloween!<br> ";
	document.write(HappyHalloween);


var Safe = "<br>Stay safe and have fun!<br>";
	document.write(Safe);

var OctThirtyFirst = "<br>Today is October.31.2018!<br>";
	document.write(OctThirtyFirst);

	//--------------------------------------------------------------------------------------------

//if Statement

var myNum1 = 7;
var myNum2 = 13;
if (myNum1< myNum2){
	document.write("<br>Halloween Is Awesome!<br>")
}

//false if statement

var myNum1 = 7;
var myNum2 = 13;
if (myNum1> myNum2){
	document.write("<br>Christmas Is Awesome!<br>")
}

//-----------------------------------------------------------------------------------------------
 //if else statement

 if(10>20){
 	document.write("No!")
 }
  else {
  	document.write("<br>Yes!<br>")
  }

  var myNum1 = 7;
  var myNum2 = 13;
  if (myNum1>myNum2){
  	document.write("<br>Not Spooky<br>")
  }
  else{
  	document.write("<br>Spooky<br>")
  }

  var age = 21;
  if (age>=18){
  	document.write("<br>Allowed<br>")
  }
  else {
  	document.write("<br>Not Allowed<br>")
  }

  //----------------------------------------------

  //else if

  var starter = 1;
  if (starter == 1){
  	document.write("<br>You chose Bulbasaur<br>");
  } else if (starter == 2){
  	document.write("<br>You chose Charmander<br>");
  } else {
  	document.write("<br>You chose Squirtle<br>");
  }

   var starter = 2;
  if (starter == 1){
  	document.write("<br>You chose Bulbasaur<br>");
  } else if (starter == 2){
  	document.write("<br>You chose Charmander<br>");
  } else {
  	document.write("<br>You chose Squirtle<br>");
  }

   var starter = 3;
  if (starter == 1){
  	document.write("<br>You chose Bulbasaur<br>");
  } else if (starter == 2){
  	document.write("<br>You chose Charmander<br>");
  } else {
  	document.write("<br>You chose Squirtle<br>");
  }

  //--------------------------------------------------------------

  //switch statement

  var starter = 2;
switch (starter) {
  case 1:
    document.write("<br>Bulbasaur<br>");
    break;
  case 2:
    document.write("<br>Charmander<br>");
    break;
  case 3:
    document.write("<br>Squirtle<br>");
    break;
  default:
    document.write("<br>Pikachu<br>");
}

// Outputs "Charmander"

//using default in switch statement

  var starter = 4;
switch (starter) {
  case 1:
    document.write("<br>Bulbasaur<br>");
    break;
  case 2:
    document.write("<br>Charmander<br>");
    break;
  case 3:
    document.write("<br>Squirtle<br>");
    break;
  default:
    document.write("<br>Pikachu<br>");
}

//Outputs "Pikachu"

//-----------------------------------------------------------------------

//For Loop

for (a=1; a<=13;a++){
	document.write(a + "<br>");
}

document.write("<br>");

var b = 1;
for(;b < 10;){
	document.write(b + "<br>");
	b++;
}

document.write("<br>");

//-----------------------------------------------------------------------

//While Loop

var c=1;
while (c<=7){
	document.write(c + "<br>");
	c++;
}

document.write("<br>");

//-----------------------------------------------------------------------

//do .. while Loop

var d=13;
do{
   document.write(d + "<br>");
   d++;
}
while (d<=18);

document.write("<br>");

//-----------------------------------------------------------------------

//break

for(e=1;e<=9;e++){
	if (e==5) {
		break;
	}
	document.write(e + "<br>");
}

document.write("<br>");
//-----------------------------------------------------------------------

//continue

for (f=2;f<=8;f++){
	if(f==6){
		continue;
	}
	document.write(f + "<br>");
}


var x = 0;
while(x<6) {
  x++;
}
document.write(x);