
document.addEventListener("click", function (e) {
	const targetElement = e.target;

	if (targetElement.closest('.menu-block-icon')) {
		document.documentElement.classList.toggle('menu-block-open');
		e.preventDefault();
	}

})


document.addEventListener("click", function (e) {
	const targetElement = e.target;

	if (targetElement.closest('.header__icon-menu')) {
		document.documentElement.classList.toggle('header-open');
		e.preventDefault();
	}

})