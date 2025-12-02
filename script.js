// Add this code to your existing script.js file

document.addEventListener('DOMContentLoaded', () => {
    // Select all elements you want to animate on scroll
    const animatedElements = document.querySelectorAll('.animated-element');

    // Configuration for the Intersection Observer
    const observerOptions = {
        root: null, // observation happens relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // The function that runs when an observed element enters or leaves the view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the element is in view, add the 'is-visible' class
                entry.target.classList.add('is-visible');
                // Optional: Stop observing the element once it has appeared
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Start observing all the target elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
