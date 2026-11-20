// Automatically mark active navigation link based on current page file
(function () {
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".navbar-nav .nav-link[data-page]").forEach(function (link) {
        if (link.getAttribute("data-page") === path) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });

    // Close mobile menu when a link is clicked
    const navbarCollapse = document.querySelector(".navbar-collapse");
    document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
            if (navbarCollapse && navbarCollapse.classList.contains("show")) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });

    // Handle CV print trigger buttons
    document.querySelectorAll(".js-print-cv").forEach(function (button) {
        button.addEventListener("click", function () {
            window.print();
        });
    });

    // Auto-trigger print dialog if navigated with ?print=1 on about.html
    const params = new URLSearchParams(window.location.search);
    if (params.get("print") === "1") {
        window.addEventListener("load", function () {
            window.print();
        });
    }
})();
