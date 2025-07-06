const clickSound = document.getElementById('click-sound');

  document.addEventListener('click', (event) => {
    // Find the closest ancestor <a> element (including the clicked element itself)
    const link = event.target.closest('a');
    const button = event.target.closest('button');

    if (link) {
      clickSound.currentTime = 0;
      clickSound.play();
    } 
    if (button) {
      clickSound.play();
    }
  });
