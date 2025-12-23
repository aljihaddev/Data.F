const navbar = document.getElementById("header");

window.addEventListener("scroll", () => {
if (window.scrollY > 50) {
navbar.classList.add("bg-white/50", "shadow-md", "backdrop-blur-[5px]");
navbar.classList.remove("bg-transparent");
} else {
navbar.classList.add("bg-transparent");
navbar.classList.remove("bg-white/50", "shadow-md", "backdrop-blur-[5px]");
}
});

// ==================================================

 jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });

// ==================================================

AOS.init();

// ==================================================