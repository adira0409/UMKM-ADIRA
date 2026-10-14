document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");
    const year = document.getElementById("year");

    // Tahun otomatis di footer
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Menu navigasi HP
    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", function () {
            const isOpen = navbar.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Tutup menu" : "Buka menu"
            );

            menuToggle.textContent = isOpen ? "×" : "☰";
        });

        // Tutup menu setelah bagian dipilih
        navbar.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navbar.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Buka menu");
                menuToggle.textContent = "☰";
            });
        });
    }
});
