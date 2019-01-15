const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

//text content
button.addEventListener('click', () => {
	p.textContent = input.value + ':';
})

//innerHTML
button.addEventListener('click', () => {
	p.innerHTML = input.value + ':';
})

/*
Element attributes:
p.title = "List description"
*/

