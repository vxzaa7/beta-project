let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-loading');
let logoSpan = document.querySelectorAll('.logo');



window.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		logoSpan.forEach((i, idx) => {
			setTimeout(() => {
				i.classList.add('active');
			}, (idx + 1) * 600)
		});

		setTimeout(() => {
			logoSpan.forEach((i, idx) => {
				setTimeout(() => {
					i.classList.remove('active');
					i.classList.add('fade');
				}, (idx + 1) * 50)
			})
		}, 3000);

		setTimeout(() => {
    intro.style.top = '-100vh'
		},4000)
	});
})
