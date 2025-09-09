// Dark/Light Mode Toggle
        const toggleButton = document.getElementById('mode-toggle');
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            document.body.classList.toggle('dark-mode');
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
		
		function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
}

const reasonSelect = document.getElementById('reason');
const displayDiv = document.getElementById('selected-reason');

reasonSelect.addEventListener('change', () => {
  const selectedOption = reasonSelect.options[reasonSelect.selectedIndex];
  const value = selectedOption.value;
  const color = selectedOption.getAttribute('data-color') || "#3b3b3b";

  if (value) {
    displayDiv.textContent = `You selected: ${selectedOption.text}`;
    displayDiv.style.backgroundColor = color;
    displayDiv.classList.add('show');
  } else {
    displayDiv.classList.remove('show');
    displayDiv.textContent = "";
  }
});

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

        // Starfield Generation
        function generateStars() {
            const starCount = 400;
            const starfield = document.getElementById('starfield');
            starfield.innerHTML = '';

            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                const size = Math.random() * 2 + 2;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;

                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                star.style.left = `${x}px`;
                star.style.top = `${y}px`;

                const dx = (Math.random() - 0.5) * 200;
                const dy = (Math.random() - 0.5) * 200;
                star.style.setProperty('--dx', `${dx}px`);
                star.style.setProperty('--dy', `${dy}px`);

                const duration = Math.random() * 15 + 10;
                star.style.animationDuration = `${duration}s`;

                starfield.appendChild(star);
            }
        }

        if (document.body.classList.contains('dark-mode')) generateStars();
        window.addEventListener('resize', () => {
            if (document.body.classList.contains('dark-mode')) generateStars();
        });

