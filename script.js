document.addEventListener('DOMContentLoaded', function() {
  const row1 = document.getElementById('row1');
  const row2 = document.getElementById('row2');
  const banner = document.getElementById('banner');

  document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    // 50% сайта прокручено
    if (scrollPosition > 500) {
      row1.style.opacity = 0;
      row2.style.opacity = 1;
    } else {
      row1.style.opacity = 1;
      row2.style.opacity = 0;
    }
    // 100% сайта прокручено
    if (scrollPosition > 1000) {
      banner.style.opacity = 0.5;
    } else {
      banner.style.opacity = 0;
    }
  });
});