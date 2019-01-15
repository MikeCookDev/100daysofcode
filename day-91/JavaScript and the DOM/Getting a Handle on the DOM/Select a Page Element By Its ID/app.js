//select the element
const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const resetBlack = document.getElementById('resetBlack');
const myBackgroundInput = document.getElementById('myBackgroundInput');
const myHeadingBackground = document.getElementById('myHeadingBackground');

myButton.addEventListener('click', () => {
	myHeading.style.color = myTextInput.value;
});

myHeadingBackground.addEventListener('click', () => {
	myHeading.style.backgroundColor = myBackgroundInput.value;
});

resetBlack.addEventListener('click', () => {
	myHeading.style.color = ('black');
});

resetBlack.addEventListener('click', () => {
	myHeading.style.backgroundColor = ('white');
});