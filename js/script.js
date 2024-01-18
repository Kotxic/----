function up() {
	window.scrollTo(0, 0)
	return false;
}
const div = document.getElementById('menu');
const div2 = document.getElementById('menu__button')
document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(div);
	const withinBoundaries2 =e.composedPath().includes(div2);
	if (! withinBoundaries2){
		if ( ! withinBoundaries ) {
			closeMenu(); // скрываем элемент т к клик был за его пределами
		}
	}
})


function show(){
    document.getElementById("menu").classList.add("menu__active")
	document.getElementById("menu__close").classList.add("close__active")
	document.body.classList.add("body__active")
	document.getElementById("wrapper").classList.add("wrapper__active")
    return false;
}

function closeMenu(){
	document.getElementById("menu").classList.remove("menu__active")
	document.getElementById("menu__close").classList.remove("close__active")
	document.body.classList.remove("body__active")
	document.getElementById("wrapper").classList.remove("wrapper__active")
    return false;
}

function tomatWebClick(){
	window.location.href="tomatWeb.html"
	return false;
}

function mainClick(){
	window.location.href="index.html"
	return false;
}
function showreelClick(){
	window.location.href="tomatShowreel.html"
}
function comunalkaClick(){
	window.location.href="comunalka.html"
}
function disignComunalka(){
	window.location.href="disignComunalka.html"
}
function makbushClick(){
	window.location.href="makbush.html"
}
function fizraClick(){
	window.location.href="fizkultura.html"
}
function tomatClick(){
	window.location.href="tomat.html"
}
function dodoClick(){
	window.location.href="dodo.html"
}
function siteClick(){
	window.location.href="site.html"
}
function poster2Click(){
	window.location.href="poster2.html"
}
function poster1Click(){
	window.location.href="poster1.html"
}