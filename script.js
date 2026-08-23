// ================================
// NACHAMMAL PORTFOLIO JAVASCRIPT
// ================================

// 1. CURRENT YEAR IN FOOTER
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 2. NAVBAR ACTIVE LINK
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// 3. SCROLL ANIMATION
const cards = document.querySelectorAll(
    ".about-card, .education-card, .skill-card, .list-card, .project-card, .cert, .career-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.7s ease";

    observer.observe(card);

});


// 4. TYPING EFFECT
const typingText = document.querySelector(".hero-text h2");

const roles = [
    "B.Tech AI & Data Science Student",
    "Aspiring Data Scientist",
    "AI Enthusiast",
    "Python Learner"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    const speed = deleting ? 50 : 100;

    setTimeout(typeEffect, speed);
}


typeEffect();


// 5. SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// 6. WELCOME MESSAGE
console.log(
    "Welcome to N. Nachammal's Portfolio "
);
