document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('construction-popup');
  const closeBtn = document.getElementById('close-popup');
  
  // Block scrolling when popup visible
  document.body.classList.add('noscroll');

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    document.body.classList.remove('noscroll');
  });
});

