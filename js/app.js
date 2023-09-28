let to__share = document.getElementById('to__share');
let share__icon = document.getElementById('share__icon');
let scrollTrigger = 590; // Adjust this value based on when you want the color to change

window.addEventListener('scroll', () => {
	let scrollY = window.scrollY;

	if (scrollY > scrollTrigger) {
		to__share.style.backgroundColor = '#874091';
		to__share.style.borderRadius = '50%';
		to__share.style.width = '10vh';
		to__share.style.height = '10vh';
		to__share.style.left = '75%';
		share__icon.style.width = '6vh';
		share__icon.style.paddingLeft = 'none';
	} else {
		to__share.style.backgroundColor = '#004e80';
		to__share.style.borderRadius = '4px';
		to__share.style.width = '8vh';
		to__share.style.height = '8vh';
		to__share.style.left = '70%';
		share__icon.style.width = '5.5vh';
		share__icon.style.paddingLeft = '2px';
	}
});
