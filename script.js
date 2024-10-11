// Function to add 'visible' class to sections on scroll
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(function(section) {
        var sectionTop = section.offsetTop;

        // Add 'visible' class if the section is in view
        if (scrollPosition >= sectionTop) {
            section.classList.add('visible');
        }
    });
});

// Close welcome note on page load (if needed)
window.onload = function() {
    closeWelcomeNote();
};
