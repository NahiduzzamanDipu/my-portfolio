// Dark/Light Mode
    const toggleButton = document.getElementById('mode-toggle');
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) generateStars();
    });
	
	 // Intro Video Modal
        const openVideoBtn = document.getElementById('open-video-modal');
        const closeVideoBtn = document.getElementById('close-video-modal');
        const modal = document.getElementById('video-modal');

        openVideoBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
        closeVideoBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        window.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
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
	
