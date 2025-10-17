// Join Form Submission
document.getElementById('joinForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you for joining! We will contact you soon.');
  this.reset();
});

// Girls Help Form Submission
document.getElementById('girlsForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Your message has been sent. We will contact you privately.');
  this.reset();
});
