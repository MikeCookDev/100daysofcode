//Objects
var person ={
	name:"Mike",age:31,
	favColor:"Blood Red", height: 6
};
//------------------------------------------
//Object Properties

var person ={
	name:"Mike",age:31,
	favColor:"Blood Red", height: 6
};
var x = person.age;
var y = person['age'];

//length property
var course={name:"JS",lessons:41};
document.write(course.name.length);
//Outputs 2

//------------------------------------------
//Object Method
document.write("<br>The write() function is actually a method of the document object.<br>");

//---------------------------------------------
//Object Constructor

function people(name,age,color){
	this.name = name;
	this.age = age;
	this.favColor = color;
}
//creating objects
var p1=new people("John",42,"green");
var p2=new people("Amy",21,"red");

document.write(p1.age);//Outputs 42
document.write("<br>");
document.write(p2.name);//Outputs"Amy"
document.write("<br>");

function persons (name, age){
	this.name=name;
	this.age=age;
}
var John=new persons("John",25);
var James=new persons("James", 21);
document.write(John.age);
document.write("<br>");
document.write(James.age);
document.write("<br>");
document.write("<br>");

//----------------------------------------------------
//Object Initializers

var John = {
	name:"John",
	age:25
};
var James = {
	name:"James",
	age:21
};
document.write(John.age);
//Outputs 25
document.write("<br>");

//----------------------------------------------------
//Methods

function persons(name,age){
	this.name=name;
	this.age=age;
	this.changeName=function(name){
		this.name=name;
	}
}

var p = new persons("David", 21);
p.changeName("John");
//Now p.name equals to "John"

document.write("<br>");

function persons(name, age) {
  this.name= name;  
  this.age = age;
  this.yearOfBirth = bornYear;
}
function bornYear() {
  return 2016 - this.age;
}
//--------------------------------------
function persons(name, age) {
  this.name= name;  
  this.age = age;
  this.yearOfBirth = bornYear;
}
function bornYear() {
  return 2016 - this.age;
}

var p = new persons("A", 22);
document.write(p.yearOfBirth());
// Outputs 1994
