document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("menu-button");
    if (!btn) return;
    btn.addEventListener("click", () => {
        document.body.classList.toggle("sidebar-visible");
        btn.setAttribute(
            "aria-pressed",
            document.body.classList.contains("sidebar-visible")
        );
    });
});
