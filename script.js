document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            var targetId = this.getAttribute('href'); // Get target section id from href attribute
            var targetSection = document.querySelector("." + targetId); // Find the target section
console.log(targetId)

            if (targetSection) {
                // Smooth scroll to the target section
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
// var navLinks = document.querySelectorAll('.navbar a');
// var targetId = this.getAttribute('href'); // Get target section id from href attribute
// console.log(targetId)
// console.log(navLinks)