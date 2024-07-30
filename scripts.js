// Handle button click event
document.getElementById('clickMe').addEventListener('click', function() {
    alert('Button clicked!');
});

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Form submitted successfully!');
        // Here you would typically send the form data to your server
        // using fetch or another AJAX method.
    } else {
        alert('Please fill in all fields.');
    }
});
