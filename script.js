// Dark / Light mode toggle
const modeToggle = document.getElementById('modeToggle');

// Initialize mode based on localStorage or default to dark
const savedMode = localStorage.getItem('mode');
if (savedMode === 'light') {
  document.body.classList.add('light');
  modeToggle.classList.add('light');
  modeToggle.setAttribute('aria-checked', 'true');
} else {
  // default dark mode
  document.body.classList.remove('light');
  modeToggle.classList.add('dark');
  modeToggle.setAttribute('aria-checked', 'false');
}

// Toggle function
function toggleMode() {
  if (document.body.classList.contains('light')) {
    document.body.classList.remove('light');
    modeToggle.classList.remove('light');
    modeToggle.classList.add('dark');
    modeToggle.setAttribute('aria-checked', 'false');
    localStorage.setItem('mode', 'dark');
  } else {
    document.body.classList.add('light');
    modeToggle.classList.remove('dark');
    modeToggle.classList.add('light');
    modeToggle.setAttribute('aria-checked', 'true');
    localStorage.setItem('mode', 'light');
  }
}

// Click and keyboard accessibility
modeToggle.addEventListener('click', toggleMode);
modeToggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMode();
  }
});


// small utilities
const editBtn = document.getElementById('editBtn');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const editableSelectors = [
  '#siteTitle', '#siteSubtitle', '#heroTitle', '#heroSubtitle',
  '#profileName', '#profileRole', '#profileBio', '#ctaTitle', '#ctaSub'
];
let editing = false;

// set year
document.getElementById('year').innerText = new Date().getFullYear();

editBtn.addEventListener('click', () => {
  editing = !editing;
  if (editing) {
    editBtn.textContent = "✅ Done";
    editBtn.classList.add('primary');
    editableSelectors.forEach(sel => {
      const el = document.querySelector(sel);
      if (el) {
        el.contentEditable = "true";
        el.classList.add('editing');
      }
    });
  } else {
    editBtn.textContent = "✏️ Edit";
    editBtn.classList.remove('primary');
    editableSelectors.forEach(sel => {
      const el = document.querySelector(sel);
      if (el) {
        el.contentEditable = "false";
        el.classList.remove('editing');
      }
    });
  }
});

// copy page HTML to clipboard (useful for quick export)
copyBtn.addEventListener('click', async () => {
  try {
    // produce a trimmed HTML string from document
    const html = '<!doctype html>\n' + document.documentElement.outerHTML;
    await navigator.clipboard.writeText(html);
    copyBtn.textContent = "Copied ✓";
    setTimeout(() => copyBtn.textContent = "📋 Copy HTML", 1800);
  } catch (e) {
    alert('Could not copy automatically. You can view source (Ctrl+U) and copy.');
  }
});

// Download basic placeholder action
downloadBtn.addEventListener('click', () => {
  window.location.href = '#';
  alert('Customize the template and use "Copy HTML" to export. Replace images and text with your content.');
});

// drag-and-drop to replace avatar image
const avatar = document.querySelector('.avatar');
avatar.addEventListener('dragover', e => e.preventDefault());
avatar.addEventListener('drop', e => {
  e.preventDefault();
  const f = e.dataTransfer.files?.[0];
  if (!f) return;
  const reader = new FileReader();
  reader.onload = function (ev) {
    avatar.style.backgroundImage = `url('${ev.target.result}')`;
  };
  reader.readAsDataURL(f);
});

function updateFooterTheme(isDark) {
  document.documentElement.style.setProperty('--footer-bg', isDark ? '#1a1a1a' : '#f5f5f5');
  document.documentElement.style.setProperty('--footer-text', isDark ? '#ffffff' : '#000000');
}
