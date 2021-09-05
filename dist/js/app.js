let UInavigationMenu = document.querySelector('.navigation-menu');

function menuActive() {
  if(window.getComputedStyle(UInavigationMenu).display === 'none'){
    UInavigationMenu.style.display = 'flex';
  }else{
    UInavigationMenu.style.display = 'none';
  }
};
