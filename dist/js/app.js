
function menuActive() {
  let UInavigationMenu = document.querySelector('.navigation-menu');
  if(UInavigationMenu.style.display === 'none'){
    UInavigationMenu.style.display = 'flex';
  }else{
    UInavigationMenu.style.display = 'none';
  }
};