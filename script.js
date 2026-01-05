// Typed text animation
new Typed('#element', {
    strings: ['Web Developer.', 'Full Stack Developer.'],
    typeSpeed: 45,
    backSpeed: 25,
    backDelay: 1200,
    loop: true
});


  

  // Navbar smooth scroll
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => {
            const id = link.getAttribute("data-target");
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        });
    });

