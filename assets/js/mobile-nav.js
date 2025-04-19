document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('menu-button');
    var body = document.body;
    btn.addEventListener('click', function () {
        var visible = body.classList.toggle('sidebar-visible');
        btn.setAttribute('aria-pressed', visible);
    });
});
