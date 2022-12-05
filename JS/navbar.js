(function () {
    const openButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('.navbar-nav');
    const closeMenu = document.querySelector('.nav_close');

    openButton.addEventListener('click', () => {
        menu.classList.add('navbar-nav--show');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('navbar-nav--show');
    });
})();