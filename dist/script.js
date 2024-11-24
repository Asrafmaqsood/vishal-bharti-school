
console.log("============Hello====================")

// const themeToggle = document.getElementById("theme-toggle");
// const darkIcon = document.getElementById("theme-toggle-dark-icon");
// const lightIcon = document.getElementById("theme-toggle-light-icon");

// // Update icons based on the current mode
// function updateIcons() {
//     if (document.documentElement.classList.contains("dark")) {
//         darkIcon.classList.remove("hidden");
//         lightIcon.classList.add("hidden");
//     } else {
//         lightIcon.classList.remove("hidden");
//         darkIcon.classList.add("hidden");
//     }
// }

// themeToggle.addEventListener("click", () => {
//     document.documentElement.classList.toggle("dark");
//     updateIcons();
// });

// // Initial icon state
// updateIcons();


// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const darkIcon = document.getElementById("theme-toggle-dark-icon");
const lightIcon = document.getElementById("theme-toggle-light-icon");

// Update icons based on the current mode
function updateIcons() {
    if (document.documentElement.classList.contains("dark")) {
        darkIcon.classList.remove("hidden");
        lightIcon.classList.add("hidden");
    } else {
        lightIcon.classList.remove("hidden");
        darkIcon.classList.add("hidden");
    }
}

themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    updateIcons();

});

// Initial icon state
updateIcons();

// Locomotive Scroll and GSAP Animation

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Locomotive Scroll
    const scrollContainer = document.querySelector("[data-scroll-section]");

    const locoScroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
    });

    // Add event listener to trigger animations when elements come into view
    const scrollElements = document.querySelectorAll("[data-scroll]");

    const checkVisibility = () => {
        scrollElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                el.classList.add("in-view");
            } else {
                el.classList.remove("in-view");
            }
        });
    };

    // Run checkVisibility on scroll and refresh
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run it initially to apply to elements that are already in view

    // Update ScrollTrigger to work with Locomotive Scroll
    locoScroll.on("scroll", () => {
        checkVisibility();
    });

    // Refresh ScrollTrigger and Locomotive Scroll after animation
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("shadow-lg");
        } else {
            header.classList.remove("shadow-lg");
        }
    });
});



