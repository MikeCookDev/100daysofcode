/*var x = document.getElementById("demo");
x.onclick = function(){
	document.body.innerHTML=Date();
}*/

//Image Slider

var images = [
"http://www.sololearn.com/uploads/slider/1.jpg", 
   "http://www.sololearn.com/uploads/slider/2.jpg", 
   "http://www.sololearn.com/uploads/slider/3.jpg"
];
var num=0;

function next(){
	var slider = document.getElementById("slider");
	num++;
	if(num>= images.length){
		num=0;
	}
	slider.src = images[num];
}

function prev(){
	var slider = document.getElementById("slider");
	num--;
	if(num<0){
		num = images.length-1;
	}
	slider.src=images[num];
}

document.write("<br>");

//Form Validation

function validate(){
	var n1 = document.getElementById("num1");
	var n2 = document.getElementById("num2");
	if(n1.value!=""&&n2.value!=""){
		return true;
	}
	alert("The values should be equal not blank");
	return false;
}