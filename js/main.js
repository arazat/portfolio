let BurgerBtn = document.querySelector('.burger-btn');
let CloseBtn = document.querySelector('.close-btn')
let MenuAct = document.querySelector('.menu')
let LinksAct = document.querySelector('.navLinks')
let Lang = document.querySelector('.lang')
let Languages = document.querySelector('.languages')
let Theme = document.querySelector('.theme')
let sun = document.querySelector('.sun')
let moon = document.querySelector('.moon')

let arrow = document.querySelector('.linesANDarrow')
setInterval(function() {
	arrow.classList.add('arrowAnimate')
}, 200)
setInterval(function() {
	arrow.classList.add('arrowAnimate')
}, 200)

BurgerBtn.addEventListener('click', function(){


	
	BurgerBtn.classList.add('open')
	CloseBtn.classList.remove('close')
	MenuAct.classList.add('menu-active')  
	Lang.classList.add('lang-active')

	if (BurgerBtn.classList.contains('btn-active')) {
		BurgerBtn.classList.remove('btn-active')	
		
	};

});

CloseBtn.addEventListener('click', function(){

	BurgerBtn.classList.add('btn-active');
	BurgerBtn.classList.remove('open')
	CloseBtn.classList.add('close')
	MenuAct.classList.remove('menu-active')
	Lang.classList.remove('lang-active')
	Languages.classList.remove('show-list-lang')


});



Theme.addEventListener('click', function(){
	Theme.classList.add('toggleTheme')
});




MenuAct.addEventListener('click', function(){

	
	if (Theme.classList.contains('toggleTheme')) {
		moon.classList.add('moon-active')
		sun.classList.add('sun-deactivate')
		Theme.classList.toggle('toggleTheme')
	}else{
		BurgerBtn.classList.add('btn-active');
		BurgerBtn.classList.remove('open')
		CloseBtn.classList.add('close')
		MenuAct.classList.remove('menu-active')
		Lang.classList.remove('lang-active')
		Languages.classList.remove('show-list-lang')

	}

});

LinksAct.addEventListener('click', function(){
	
	BurgerBtn.classList.add('btn-active');
	BurgerBtn.classList.remove('open')
	CloseBtn.classList.add('close')
	MenuAct.classList.remove('menu-active')
	Lang.classList.remove('lang-active')
	Languages.classList.remove('show-list-lang')

});

Lang.addEventListener('click',function(){
	Languages.classList.toggle('show-list-lang')


});




let cursor = "<span></span>",
telecopy = teletype.innerHTML;

function typeIt() {
  let counter = 0;
  teletype.innerHTML = cursor;
  teletype.removeAttribute("hidden");
  let i = setInterval(function(){
    teletype.innerHTML = telecopy.substr(0, counter) + cursor;
      counter++;
      if(counter === telecopy.length + 1) {
          clearInterval(i);
      }
  }, 100);
}
typeIt();

