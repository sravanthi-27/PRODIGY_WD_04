document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (name && email && message) {
            // Example of handling form data
            console.log('Form submitted:', {
                name: name,
                email: email,
                message: message
            });

            // Show a thank you message or perform an action like sending data to a server
            alert('Thank you for your message!');

            // Reset the form
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
