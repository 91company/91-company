// Join Us Form
document.getElementById('joinForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent actual submission
    alert('Thank you for joining! We will contact you soon.');
    this.reset(); // Clear the form
});

// Girls Help Form
document.getElementById('girlsForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent actual submission
    alert('Your message has been received. We will help you shortly.');
    this.reset(); // Clear the form
});
