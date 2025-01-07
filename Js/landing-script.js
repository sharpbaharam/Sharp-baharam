document.addEventListener('DOMContentLoaded', function() {
  // Form validation
  const contactForm = document.querySelector('.contact-form form');
  contact.addEventListener('submit', function(event) {
      const name = contactForm.name.value;
      const email = contactForm.email.value;
      const message = contactForm.message.value;

      if (name === '' || email === '' || message === '') {
          event.preventDefault();
          alert('Please fill out all fields.');
      }
  });

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.hash);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Toggle menu on mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('mobile-menu');
});

}); // DOMContentLoaded event listener ends here