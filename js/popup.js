window.addEventListener('load', () => {
  const popup = document.getElementById('construction-popup');
  const closeBtn = document.getElementById('close-popup');
  const clickSound = document.getElementById('click-sound');

  setTimeout(() => {
    popup.style.display = 'flex';
    document.body.classList.add('noscroll');
  }, 6000); // Show popup after 5 seconds

  closeBtn.addEventListener('click', () => {
    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play();
    }
    popup.style.display = 'none';
    document.body.classList.remove('noscroll');
  });
});
