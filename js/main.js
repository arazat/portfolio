let BurgerBtn = document.querySelector('.burger-btn');
let CloseBtn = document.querySelector('.close-btn')
let MenuAct = document.querySelector('.menu')
let LinksAct = document.querySelector('.navLinks')
let Lang = document.querySelector('.lang')

BurgerBtn.addEventListener('click', function(){


	Lang.classList.toggle('lang-active')
	BurgerBtn.classList.add('open')

	CloseBtn.classList.remove('close')

	MenuAct.classList.toggle('menu-active')
	if (BurgerBtn.classList.contains('btn-active')) {
		BurgerBtn.classList.remove('btn-active')	
		
	};

});

CloseBtn.addEventListener('click', function(){

	BurgerBtn.classList.toggle('btn-active');
	Lang.classList.toggle('lang-active')

	MenuAct.classList.toggle('menu-active')
	BurgerBtn.classList.remove('open')
	CloseBtn.classList.add('close')


});


MenuAct.addEventListener('click', function(){
	MenuAct.classList.remove('menu-active')

});
LinksAct.addEventListener('click', function(){
	MenuAct.classList.remove('menu-active')

});



