// Typed text animation
new Typed('#element', {
    strings: ['Web Developer.'],
    typeSpeed: 45,
});

  

  // Navbar smooth scroll
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => {
            const id = link.getAttribute("data-target");
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        });
    });

