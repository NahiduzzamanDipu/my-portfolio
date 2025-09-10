// Dark/Light Mode
    const toggleButton = document.getElementById('mode-toggle');
	const toggleIcon = toggleButton.querySelector("i");

	toggleButton.addEventListener('click', () => {
	  document.body.classList.toggle('light-mode');
	  document.body.classList.toggle('dark-mode');

	  if (document.body.classList.contains('dark-mode')) {
		toggleIcon.classList.remove("fa-sun");
		toggleIcon.classList.add("fa-moon");
		generateStars();
	  } else {
		toggleIcon.classList.remove("fa-moon");
		toggleIcon.classList.add("fa-sun");
	  }
	});


	
	 // Video Modal Script
		const openVideoBtn = document.getElementById('open-video-modal');
		const closeVideoBtn = document.getElementById('close-video-modal');
		const videoModal = document.getElementById('video-modal');
		const videoElement = videoModal.querySelector('video');

		// Open Modal
		openVideoBtn.addEventListener('click', () => {
			videoModal.classList.add('show');
			videoElement.play();
		});

		// Close Modal
		function closeVideoModal() {
			videoModal.classList.remove('show');
			videoElement.pause();
			videoElement.currentTime = 0; // reset video
		}

		// Close when clicking close button
		closeVideoBtn.addEventListener('click', closeVideoModal);

		// Close when clicking outside video content
		videoModal.addEventListener('click', (e) => {
			if (e.target === videoModal) {
				closeVideoModal();
			}
		});
	
	const menuToggle = document.querySelector(".menu-toggle");
	const navLinks = document.querySelector(".nav-links");

	menuToggle.addEventListener("click", () => {
	  navLinks.classList.toggle("active");
	});



    // Starfield
    function generateStars() {
      const starCount = 600;
      const starfield = document.getElementById('starfield');
      starfield.innerHTML = '';

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        // Size
        const sizeCategory = Math.random();
        let size;
        if (sizeCategory < 0.6) size = Math.random() * 2 + 1;
        else if (sizeCategory < 0.9) size = Math.random() * 3 + 2;
        else size = Math.random() * 4 + 4;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Position
        star.style.left = `${Math.random() * window.innerWidth}px`;
        star.style.top = `${Math.random() * window.innerHeight}px`;

        // Movement
        const dx = (Math.random() - 0.5) * 300;
        const dy = (Math.random() - 0.5) * 300;
        star.style.setProperty('--dx', `${dx}px`);
        star.style.setProperty('--dy', `${dy}px`);

        // Speed
        star.style.animationDuration = `${Math.random() * 20 + 5}s, ${Math.random() * 5 + 2}s`;

        // Opacity
        star.style.opacity = Math.random() * 0.8 + 0.2;

        starfield.appendChild(star);
      }
    }

    window.addEventListener("load", generateStars);
    window.addEventListener("resize", generateStars);
	
	// Interest toggle button
	  const interestToggle = document.getElementById('interest-toggle');
	  const interestOptions = document.getElementById('interest-options');

	  interestToggle.addEventListener('click', () => {
		const expanded = interestToggle.getAttribute('aria-expanded') === 'true';
		interestToggle.setAttribute('aria-expanded', String(!expanded));
		if (!expanded) {
		  interestOptions.hidden = false;
		  interestOptions.classList.add('show');
		} else {
		  interestOptions.classList.remove('show');
		  setTimeout(() => { interestOptions.hidden = true; }, 400);
		}
	  });

	  // Checkbox pill style toggle for checked
	  document.querySelectorAll('.option-pill input[type="checkbox"]').forEach(chk => {
		chk.addEventListener('change', e => {
		  const label = e.target.parentElement;
		  if(e.target.checked) {
			label.classList.add('checked');
		  } else {
			label.classList.remove('checked');
		  }
		});
	  });
	
	
		const moon = document.querySelector('.moon');

		function moveMoonRandomly() {
		  if (!document.body.classList.contains('dark-mode')) return;

		  const maxX = window.innerWidth - moon.offsetWidth;
		  const maxY = window.innerHeight / 2; // upper half only

		  const randomX = Math.random() * maxX;
		  const randomY = Math.random() * maxY;

		  moon.style.left = randomX + 'px';
		  moon.style.top = randomY + 'px';

		  // Move again after 10 seconds
		  setTimeout(moveMoonRandomly, 10000); // slower movement
		}

		// Initialize
		moveMoonRandomly();



