// NNN paper confetti: a light, continuous paper-splash effect on every page.
(() => {
  const layer = document.querySelector('.paper-layer');
  if (layer) {
    const colors = ['#ff405b', '#ffd166', '#8acaff', '#b99aff', '#f4f6fb'];
    const makePaper = () => {
      if (document.hidden || layer.childElementCount > 34) return;
      const piece = document.createElement('span');
      piece.className = 'paper';
      piece.style.left = Math.random() * 100 + 'vw';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.setProperty('--drift', (Math.random() * 150 - 75) + 'px');
      piece.style.setProperty('--spin', (Math.random() * 700 + 200) + 'deg');
      const duration = Math.random() * 5 + 6;
      piece.style.animationDuration = duration + 's';
      layer.appendChild(piece);
      window.setTimeout(() => piece.remove(), duration * 1000);
    };
    for (let i = 0; i < 18; i++) window.setTimeout(makePaper, i * 180);
    window.setInterval(makePaper, 420);
  }

  const wishButton = document.getElementById('wishButton');
  const wishMessage = document.getElementById('wishMessage');
  if (wishButton && wishMessage) {
    wishButton.addEventListener('click', () => {
      wishMessage.hidden = false;
      wishButton.textContent = 'WISH UNLOCKED ✨';
      wishButton.disabled = true;
      wishButton.style.opacity = '.7';
      wishMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      for (let i = 0; i < 35; i++) {
        window.setTimeout(() => {
          if (!layer) return;
          const p = document.createElement('span');
          p.className = 'paper';
          p.style.left = (35 + Math.random() * 30) + 'vw';
          p.style.top = '35vh';
          p.style.background = ['#ff405b','#ffd166','#8acaff','#b99aff'][i % 4];
          p.style.setProperty('--drift', (Math.random() * 260 - 130) + 'px');
          p.style.setProperty('--spin', (Math.random() * 900) + 'deg');
          p.style.animationDuration = (Math.random() * 2 + 2) + 's';
          layer.appendChild(p);
          window.setTimeout(() => p.remove(), 4500);
        }, i * 22);
      }
    });
  }
})();