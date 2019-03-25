(() => {
	// stub
	console.log('fired!');

	const 	sigils 		= document.querySelectorAll('.sigil-container'),
			lightbox 	= document.querySelector('.lightbox'),
			video		= document.querySelector('video'),
			closeLB 	= document.querySelector('.lightbox-close'),
			banners 	= document.querySelector("#houseImages");

	function openLightbox() {
		// grab the right video source
		// debugger;
		// get the lowercase house name from the class list
		let targetHouse = this.className.split(" ")[1];

		// make sure the names match - needs to be uppercase
		// stark becomes Stark -> first make a capital S, then add ark (or any house name)
		let targetSrc = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		video.src = `video/House-${targetSrc}.mp4`;

		lightbox.classList.add('lightbox-on');

		video.load();
		video.play();
	}

	function closeLightbox() {
		lightbox.classList.remove('lightbox-on');
		// rewind the video to the beginning
		// and also pause it
		video.currentTime = 0;
		video.pause();
	}

	function animateBanner() {
		const offSet = 600; // this is the offset / width of one image

		// this is the total distance the images need to move as a pixel value
		// dataset.offset is coming from each shield we click on 
		totalOffset = this.dataset.offset * offSet;// + "px";

		// set the style (CSS will animate this for us)
		//banners.style.right = totalOffset;
		TweenMax.to(banners, 0.8, { right: totalOffset });
	}

	//sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));
	sigils.forEach(sigil => sigil.addEventListener('click', animateBanner));

	video.addEventListener('ended', closeLightbox);
	closeLB.addEventListener('click', closeLightbox);
})();