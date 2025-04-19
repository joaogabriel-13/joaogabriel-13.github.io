(function () {
    var menuButton = document.getElementById('menu-button');
    if (!menuButton) return;
    menuButton.addEventListener('click', function () {
        document.body.classList.toggle('sidebar-visible');
    });
})();
