// MATRIX EFFECT - Blue Style
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

let width, height;
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const letters = '01';
const fontSize = 16;
const columns = Math.floor(width / fontSize);
const drops = Array(columns).fill(0);

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 10, 0.15)';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#00bfff';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > height && Math.random() > 0.975) drops[i] = 0;

    drops[i]++;
  }
}
setInterval(draw, 40);

// CURSOR EFFECT
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

document.addEventListener('mousemove', (e) => {
  cursorDot.style.left = e.clientX + 'px';
  cursorDot.style.top = e.clientY + 'px';

  cursorOutline.style.left = e.clientX + 'px';
  cursorOutline.style.top = e.clientY + 'px';
});

// CURSOR SCALE ON BUTTON HOVER
const buttons = document.querySelectorAll('.cyber-btn, .nav-btn');
buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.8)';
  });
  btn.addEventListener('mouseleave', () => {
    cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});

// NAVIGATION SMOOTH SCROLL handled by CSS scroll-behavior

// XP BAR ANIMATION
window.addEventListener('load', () => {
  const bars = document.querySelectorAll('.xp .bar div');
  bars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
});

// LOADING SCREEN ANIMATION
const loadingScreen = document.getElementById('loading-screen');
const progressBar = loadingScreen.querySelector('.progress');

let progress = 0;
const interval = setInterval(() => {
  progress += 10;
  progressBar.style.width = progress + '%';
  if (progress >= 100) {
    clearInterval(interval);
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 600);
  }
}, 450);

// BACKGROUND MUSIC
const musicBtn = document.getElementById('music-btn');
const bgm = document.getElementById('bgm');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (!isPlaying) {
    bgm.play();
    musicBtn.textContent = '🔈'; // lower volume icon
  } else {
    bgm.pause();
    musicBtn.textContent = '🔊';
  }
  isPlaying = !isPlaying;
});
