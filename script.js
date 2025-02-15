
// For counting the no. of courses, faculties, computers etc.
document.addEventListener('DOMContentLoaded', () => {
    // Function to animate the count
    function animateCount(element) {
        const countElement = element.querySelector('.countx');
        const endValue = parseInt(countElement.getAttribute('data-count'), 10);
        let startValue = 0;
        const duration = 2000; // Duration of the animation in milliseconds
        const stepTime = 10; // Time between each step in milliseconds
        const steps = Math.ceil(duration / stepTime);
        const increment = endValue / steps;
        function updateCount() {
            startValue += increment;
            if (startValue >= endValue) {
                countElement.textContent = `${Math.round(endValue)}+`;
            } else {
                countElement.textContent = `${Math.round(startValue)}+`;
                requestAnimationFrame(updateCount);
            }
        }
        updateCount();
    }
    // Intersection Observer to trigger the animation when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                animateCount(target);
                observer.unobserve(target); // Stop observing once animated
            }
        });
    }, { threshold: 0.5 }); // Trigger animation when 50% of the element is in view

    // Observe each calc-box element
    document.querySelectorAll('.calc-box').forEach(box => {
        observer.observe(box);
    });
});


// For smooth scrolling when we click on nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {   // a's href which contain '#'
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



let menu = document.querySelector("#menu");
const hiddenNav = document.querySelector(".fourth");
const cutMenu = document.querySelector("#cut-menu");

menu.addEventListener('click', () => {
    hiddenNav.classList.add('active'); // Add active class
    menu.style.display = "none";
    cutMenu.style.display = "block";
});

cutMenu.addEventListener('click', () => {
    hiddenNav.classList.remove('active'); // Remove active class
    menu.style.display = "block";
    cutMenu.style.display = "none";
});

window.addEventListener('resize', () => {
    cutMenu.style.display = "none";
    hiddenNav.classList.remove('active'); // Hide on resize
    menu.style.display = "block";

    if (window.innerWidth > 1100) {
        cutMenu.style.display = "none"; // Hide cut menu
        hiddenNav.classList.remove('active'); // Hide nav
        menu.style.display = "none"; // Ensure menu is hidden
    }
});
