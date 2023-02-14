const toggleButton = document.getElementById('nav_menu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('show')
})

navWrapper.addEventListener('click',e => {
  if(e.target.id === 'nav'){
    navWrapper.classList.remove('show')
    toggleButton.classList.remove('close')
  }
})


/* (function () {
    const openButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('.navbar-nav');
    const closeMenu = document.querySelector('.nav_close');

    openButton.addEventListener('click', () => {
        menu.classList.add('navbar-nav--show');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('navbar-nav--show');
    });
    
})(); */
