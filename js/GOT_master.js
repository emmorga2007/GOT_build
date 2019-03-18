(() => {
	// stub
	console.log('fired!');

	const 	sigils 		= document.querySelectorAll('.sigil-container'),
			lightbox 	= document.querySelector('.lightbox'),
			video		= document.querySelector('video');

	function openLightbox() {
		lightbox.classList.add('lightbox-on');
		video.play();
	}

	function closeLightbox() {
		lightbox.classList.remove('lightbox-on');
		// rewind the video to the beginning
		// and also pause it
		video.currentTime = 0;
		video.pause();
	}

	sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));

	video.addEventListener('ended', closeLightbox);
})();