// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if(targetSection){
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for fixed nav height
                behavior: 'smooth'
            });
        }
    });
});

// Join Us Form
document.getElementById('joinForm').addEventListener('submit', function(e) {
    e.preventDefault();  
    alert('Thank you for joining! We will contact you soon.');
    this.reset(); 
});

// Girls Help Form
document.getElementById('girlsForm').addEventListener('submit', function(e) {
    e.preventDefault();  
    alert('Your message has been received. We will help you shortly.');
    this.reset(); 
});
