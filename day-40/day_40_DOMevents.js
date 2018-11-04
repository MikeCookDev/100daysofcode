//finds element by id
document.getElementById(id) 

//finds elements by class name
document.getElementsByClassName(name) 

//finds elements by tag name
document.getElementsByTagName(name)

//In the example below, the getElementById method is used to select the element with id="demo" and change its content:

var elem = document.getElementById("demo");
elem.innerHTML = "Hello World!";

/*The example above assumes that the HTML contains an element with id="demo", 
for example <div id="demo"></div>.*/