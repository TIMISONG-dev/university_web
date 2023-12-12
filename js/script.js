document.addEventListener('DOMContentLoaded', function() {

  const burgerBtn = document.querySelector(".nav__burger")
  const burgerMenu =document.querySelector(".nav__menu")
  const burgerBtnIcon  = document.querySelector(".nav__burger i")
  let isVisible = false;
  let intervalId;
  burgerBtn.addEventListener("click", () => {
    if (isVisible) {
      hideMenu();
    } else {
      showMenu();
    }
   
  });
  
  function showMenu() {
    burgerBtnIcon.classList.add("fa-xmark")
    clearInterval(intervalId);
    burgerMenu.style.display = 'flex';
    
    burgerMenu.offsetHeight; 
    burgerMenu.classList.remove("hide");
    intervalId = setInterval(() => {
      burgerMenu.style.opacity = '1';
    }, 50);
    isVisible = true;
    document.body.addEventListener("click",(event)=>
    {
    
      if(!burgerMenu.contains(event.target) && !burgerBtn.contains(event.target))
      {
  
        hideMenu()
      }
    })

  }

  function hideMenu() {
    burgerBtnIcon.classList.remove("fa-xmark")
    clearInterval(intervalId);
    burgerMenu.style.opacity = '0';
    intervalId = setInterval(() => {
      burgerMenu.classList.add("hide");

    }, 400);
    isVisible = false;
  }
  window.addEventListener("resize",()=>
  {
    if(!isVisible && window.innerWidth > 768)
    {
      burgerMenu.style='flex'
    }
  })
});
function RickRoll() 
{
  const a = document.createElement("a")
  a.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  a.click()
}

