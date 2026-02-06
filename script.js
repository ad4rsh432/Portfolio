// Typing effect
const text = "BCA Graduate | Full Stack Developer | Django Enthusiast";
let index = 0;

function typingEffect() {
    if (index < text.length) {
        document.querySelector(".typing").textContent += text.charAt(index);
        index++;
        setTimeout(typingEffect, 80);
    }
}
typingEffect();

// Theme toggle
function toggleTheme() {
    document.body.classList.toggle("light");
}

// Mobile menu
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

// Scroll reveal animation (ROBUST)
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 120) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run once on load
