// ==============================
// DARK/LIGHT MODE TOGGLE
// ==============================
const toggleButton = document.getElementById('mode-toggle');
const toggleIcon = toggleButton.querySelector("i");

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleIcon.classList.replace("fa-sun", "fa-moon");
        generateStars();
        moveMoonRandomly();
    } else {
        toggleIcon.classList.replace("fa-moon", "fa-sun");
    }
});

// ==============================
// VIDEO MODAL
// ==============================
const closeVideoBtn = document.getElementById('close-video-modal');
const videoModal = document.getElementById('video-modal');
const videoElement = document.getElementById('intro-video');

// Function to open modal programmatically
function openVideoModal() {
  videoModal.classList.add('show');
  videoElement.play();
}

// Close modal
function closeVideoModal() {
  videoModal.classList.remove('show');
  videoElement.pause();
  videoElement.currentTime = 0;
}

// Close when clicking close button
closeVideoBtn.addEventListener('click', closeVideoModal);

// Close when clicking outside video content
videoModal.addEventListener('click', (e) => {
  if (e.target === videoModal) {
    closeVideoModal();
  }
});

// ==============================
// OPEN VIDEO MODAL (Fix)
// ==============================
const openVideoBtn = document.getElementById('open-video-modal');
if (openVideoBtn) {
    openVideoBtn.addEventListener('click', openVideoModal);
}

// ==============================
// MOBILE NAVIGATION
// ==============================
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ==============================
// STARFIELD
// ==============================
function generateStars() {
    if (!document.body.classList.contains('dark-mode')) return;

    const starCount = 600;
    const starfield = document.getElementById('starfield');
    starfield.innerHTML = '';

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        // Size
        const sizeCategory = Math.random();
        let size = sizeCategory < 0.6 ? Math.random() * 2 + 1
                 : sizeCategory < 0.9 ? Math.random() * 3 + 2
                 : Math.random() * 4 + 4;

        star.style.width = star.style.height = `${size}px`;

        // Position
        star.style.left = `${Math.random() * window.innerWidth}px`;
        star.style.top = `${Math.random() * window.innerHeight}px`;

        // Movement
        star.style.setProperty('--dx', `${(Math.random() - 0.5) * 300}px`);
        star.style.setProperty('--dy', `${(Math.random() - 0.5) * 300}px`);

        // Animation duration & opacity
        star.style.animationDuration = `${Math.random() * 20 + 5}s, ${Math.random() * 5 + 2}s`;
        star.style.opacity = Math.random() * 0.8 + 0.2;

        starfield.appendChild(star);
    }
}

window.addEventListener("load", generateStars);
window.addEventListener("resize", generateStars);

// ==============================
// INTEREST TOGGLE
// ==============================
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
        setTimeout(() => interestOptions.hidden = true, 400);
    }
});

// ==============================
// CHECKBOX PILL STYLING
// ==============================
document.querySelectorAll('.option-pill input[type="checkbox"]').forEach(chk => {
    chk.addEventListener('change', e => {
        e.target.parentElement.classList.toggle('checked', e.target.checked);
    });
});

// ==============================
// MOVING MOON
// ==============================
const moon = document.querySelector('.moon');

function moveMoonRandomly() {
    if (!document.body.classList.contains('dark-mode')) return;

    const maxX = window.innerWidth - moon.offsetWidth;
    const maxY = window.innerHeight / 2;

    moon.style.left = `${Math.random() * maxX}px`;
    moon.style.top = `${Math.random() * maxY}px`;

    setTimeout(moveMoonRandomly, 10000); // move every 10s
}
