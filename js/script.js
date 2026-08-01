/*=========================================================
    KELVIN WAMBUA KANGALYA PORTFOLIO
    Version 2.0
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================================
        1. STICKY NAVBAR
    =====================================================*/

    const navbar = document.querySelector(".custom-navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    });

    /*=====================================================
        2. TYPING EFFECT
    =====================================================*/

    const typingElement = document.getElementById("typing-text");

    const professions = [

        "Economist",

        "AI Data Analyst",

        "Researcher",

        "Software Developer"

    ];

    let professionIndex = 0;
    let letterIndex = 0;
    let deleting = false;

    function typeProfession() {

        const current = professions[professionIndex];

        if (!deleting) {

            typingElement.textContent = current.substring(0, letterIndex);

            letterIndex++;

            if (letterIndex > current.length) {

                deleting = true;

                setTimeout(typeProfession, 1800);

                return;

            }

        } else {

            typingElement.textContent = current.substring(0, letterIndex);

            letterIndex--;

            if (letterIndex < 0) {

                deleting = false;

                professionIndex++;

                if (professionIndex >= professions.length) {

                    professionIndex = 0;

                }

            }

        }

        setTimeout(typeProfession, deleting ? 45 : 90);

    }

    typeProfession();

    /*=====================================================
        3. SCROLL REVEAL
    =====================================================*/

    const reveals = document.querySelectorAll(

        ".section-title, .hero, .card, .skill-card, .project-card, .timeline-item, .contact-card"

    );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    reveals.forEach(item => {

        item.classList.add("fade-up");

        observer.observe(item);

    });

    /*=====================================================
        4. BACK TO TOP BUTTON
    =====================================================*/

    const topButton = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topButton.style.display = "flex";

        } else {

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /*=====================================================
        5. HERO COUNTERS
    =====================================================*/

    const counters = document.querySelectorAll(".stat-card h3");

    let counted = false;

    function runCounters() {

        if (counted) return;

        if (window.scrollY < 150) return;

        counted = true;

        counters.forEach(counter => {

            const text = counter.innerText;

            const value = parseInt(text);

            if (isNaN(value)) return;

            let start = 0;

            const interval = setInterval(() => {

                start++;

                counter.innerText = start + "+";

                if (start >= value) {

                    clearInterval(interval);

                }

            }, 70);

        });

    }

    window.addEventListener("scroll", runCounters);

    /*=====================================================
        6. ACTIVE NAVIGATION
    =====================================================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            const height = section.clientHeight;

            if (pageYOffset >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

});
