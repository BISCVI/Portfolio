document.addEventListener('DOMContentLoaded', function() {

	/* Инициализируем swiper */
	const showSlider = new Swiper('.showcase-carousel', {
		loop: true,
		slidesPerView: 3,
		speed: 1800,
		centeredSlides: true,
		navigation: {
			nextEl: '.showcase-navigation__next',
			prevEl: '.showcase-navigation__prev'

		}
	})

	/* Ускоряем видео */
	document.querySelector('video').playbackRate = 2

})
