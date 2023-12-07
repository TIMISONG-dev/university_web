document.addEventListener('DOMContentLoaded', function() {
    const row1 = document.getElementById('row1');
    const row2 = document.getElementById('row2');
  
    document.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
  
      if (scrollPosition > 200) {
        row1.style.opacity = 0;
        row2.style.opacity = 1;
      } else {
        row1.style.opacity = 1;
        row2.style.opacity = 0;
      }
    });
  });