/*Animate a progress bar onscroll */

const percentageBar = document.querySelector('.progress-container__bar');

function updateProgressBar() {
  const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
  let totalToScroll = scrollHeight - clientHeight;
  let scrollPercentage = (scrollTop / totalToScroll) * 100;
  percentageBar.style.width = 'calc(' + Math.ceil(scrollPercentage) + "%" + ' + 15px)';
}

window.addEventListener('scroll', updateProgressBar);
