const box = document.querySelector('.box');
//box.style.display = 'none';

//jQuery('.box').hide(); replace the jQuery with $ to make it shorter and its most common
//$('.box').hide();
//$('.box').show();

//box.addEventListener('click', function() {
//	alert('You clicked me!');
//});

$('.box').click(function(){
	alert('You clicked me with jQuery');
});
