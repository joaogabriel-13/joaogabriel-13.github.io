document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("menu-button");
    if (!btn) return;

    btn.addEventListener("click", function () {
        document.body.classList.toggle("sidebar-visible");
    });
});
