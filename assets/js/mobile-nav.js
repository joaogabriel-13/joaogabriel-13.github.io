document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('menu-button');
    if (!btn) return;

    btn.addEventListener('click', () => {
        const visible = document.body.classList.toggle('sidebar-visible');
        btn.setAttribute('aria-pressed', visible);
    });
});
