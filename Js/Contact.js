document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".contact-info, .contact-form-section, footer");
  const cards = document.querySelectorAll(".info-card");
  const contactForm = document.querySelector('.contact-form');

  const observerOptions = {
      threshold: 0.2,
  };

  const fadeInOnScroll = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("fade-in-visible");
              observer.unobserve(entry.target);
          }
      });
  };

  const cardZoomIn = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("zoom-in");
              observer.unobserve(entry.target);
          }
      });
  };

  const sectionObserver = new IntersectionObserver(fadeInOnScroll, observerOptions);
  const cardObserver = new IntersectionObserver(cardZoomIn, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));
  cards.forEach(card => cardObserver.observe(card));

  contactForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission

      const name = document.querySelector('#name').value.trim();
      const email = document.querySelector('#email').value.trim();
      const message = document.querySelector('#message').value.trim();

      let isValid = true;

      // Clear previous error messages
      document.querySelectorAll('.error-message').forEach(error => error.remove());

      // Validate Name
      if (name === '') {
          isValid = false;
          showError('name', 'Name is required.');
      }

      // Validate Email
      if (email === '') {
          isValid = false;
          showError('email', 'Email is required.');
      } else if (!isValidEmail(email)) {
          isValid = false;
          showError('email', 'Please enter a valid email address.');
      }

      // Validate Message
      if (message === '') {
          isValid = false;
          showError('message', 'Message is required.');
      }

      if (isValid) {
          // Simulate form submission (replace with actual API call if needed)
          alert('Thank you for contacting us! We will get back to you soon.');
          contactForm.reset();
      }
  });

  // Function to display error messages
  function showError(fieldId, message) {
      const field = document.querySelector(`#${fieldId}`);
      const error = document.createElement('div');
      error.className = 'error-message';
      error.textContent = message;
      error.style.color = 'red';
      error.style.marginTop = '5px';
      field.parentNode.insertBefore(error, field.nextSibling);
  }

  // Function to validate email format
  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
});
