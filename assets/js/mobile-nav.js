document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('menu-button');
    if (!btn) return;
    btn.addEventListener('click', function () {
        document.body.classList.toggle('sidebar-visible');
        const pressed = document.body.classList.contains('sidebar-visible');
        btn.setAttribute('aria-pressed', pressed);
    });
});
