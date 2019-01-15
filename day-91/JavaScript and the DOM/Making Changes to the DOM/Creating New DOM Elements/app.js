const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

toggleList.addEventListener('click', () => {
	if (listDiv.style.display == 'none') {
		toggleList.textContent ='Hide list';
		listDiv.style.display = 'block';
	} else {
		toggleList.textContent = 'Show list';
	listDiv.style.display = 'none';
	}
});

addItemButton.addEventListener('click', () => {
	let li = document.createElement('li');
	li.textContent = addItemInput.value;
});


/*text content
button.addEventListener('click', () => {
	p.textContent = descriptionInput.value + ':';
})*/

//innerHTML
descriptionButton.addEventListener('click', () => {
	descriptionP.innerHTML = input.value + ':';
});

/*
Element attributes:
p.title = "List description"
*/


