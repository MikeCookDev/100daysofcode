const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const listUl = listDiv.querySelector('ul');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');


listUl.addEventListener('click', (event) => {
	if (event.target.tagName == 'BUTTON') {
	let li = event.target.parentNode;
	let ul = li.parentNode;
	ul.removeChild(li);
 }
 });


//This will tell you what function is doing what in the console
/*
document.addEventListener('click', (event) => {
	console.log(event.target);
})*/



toggleList.addEventListener('click', () => {
	if (listDiv.style.display == 'none') {
		toggleList.textContent ='Hide list';
		listDiv.style.display = 'block';
	} else {
		toggleList.textContent = 'Show list';
	listDiv.style.display = 'none';
	}
});


descriptionButton.addEventListener('click', () => {
	descriptionP.innerHTML = descriptionInput.value + ':';
	descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
	let ul = document.getElementsByTagName('ul')[0];
	let li = document.createElement('li');
	li.textContent = addItemInput.value;
	ul.appendChild(li);
	addItemInput.value = '';
});


