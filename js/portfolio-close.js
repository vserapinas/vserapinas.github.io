let w = window.innerWidth;
if (w > 768) {

  closeBtn.addEventListener('click', () => {
    body.style.overflowX = 'scroll';
  });
} else {
  closeBtn.addEventListener('click', () => {
    body.style.overflowY = 'scroll';
  });
}