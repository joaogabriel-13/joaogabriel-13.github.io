// assets/js/mobile-nav.js
document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("menu-button");
    if (!btn) return;

    btn.addEventListener("click", function () {
        document.body.classList.toggle("sidebar-visible");
        btn.setAttribute("aria-pressed", document.body.classList.contains("sidebar-visible"));
    });
});
