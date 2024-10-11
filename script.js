// Function to close the welcome note after 2 seconds
function closeWelcomeNote() {
    document.getElementById("welcome-note").style.display = "none"; // Hide the welcome note
    document.getElementById("overlay").style.display = "none"; // Hide the overlay
}

// Show welcome note and overlay on page load
window.onload = function() {
    // Ensure the page scrolls to the top
    window.scrollTo(0, 0); // Scroll to the top of the page
    document.getElementById("welcome-note").style.display = "block"; // Show the welcome note
    document.getElementById("overlay").style.display = "block"; // Show the overlay
    setTimeout(closeWelcomeNote, 1000); // Close welcome note after 1 second

    // Ensure sections are visible after welcome note
    setTimeout(() => {
        var sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.add('visible');
        });
    }, 2000); // Adds visible class after welcome note disappears
};

// Function to add 'visible' class to sections on scroll
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(function(section) {
        var sectionTop = section.offsetTop;

        // Add 'visible' class if the section is in view
        if (scrollPosition >= sectionTop) {
            section.classList.add('visible');
            section.classList.add('active'); // Highlight the active section
        } else {
            section.classList.remove('active');
        }
    });

    // Show or hide the scroll up button based on scroll position
    var scrollUpButton = document.querySelector('.scroll-up');
    if (window.scrollY > 200) {
        scrollUpButton.style.display = 'block'; // Show button if scrolled down
    } else {
        scrollUpButton.style.display = 'none'; // Hide button if at the top
    }

    // Update scroll indicator position
    updateScrollIndicator();
});

// Scroll to top function
document.querySelector('.scroll-up').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
});
