// 1. Mobile Navigation Menu

const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuButton) {
    menuButton.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
}

// 2. Dark and Light Theme

const themeButton = document.querySelector(".theme-btn");

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");

        if (document.body.classList.contains("light-theme")) {
            themeButton.textContent = "Dark Mode";
        } else {
            themeButton.textContent = "Light Mode";
        }
    });
}

// 3. Typing Animation

const typingText = document.querySelector(".typing");

const words = [
    "Web Developer",
    "Computer Science Student",
    "Programmer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {
    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (deleting) {
        letterIndex--;
    } else {
        letterIndex++;
    }

    typingText.textContent =
        currentWord.substring(0, letterIndex);

    let speed = deleting ? 60 : 120;

    if (!deleting && letterIndex === currentWord.length) {
        deleting = true;
        speed = 1000;
    }

    else if (deleting && letterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// 4. Contact Form

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Thank you! Your message has been submitted.");

        contactForm.reset();
    });
}

// 5. Footer Current Year

const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}