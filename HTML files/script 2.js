window.onload = function() {
  // Simulate the loading time (you can adjust the time as needed)
  setTimeout(function() {
      // Hide loading screen
      document.querySelector('.loading-screen').style.opacity = '0';
      document.querySelector('.loading-screen').style.transition = 'opacity 1s ease-in-out';
      setTimeout(() => {
          document.querySelector('.loading-screen').style.display = 'none';
      }, 1000);

      // Show main content with a fade effect
      const content = document.querySelector('.content');
      content.style.display = 'block';
      content.style.animation = 'fadeContent 2s ease-in-out forwards';
  }, 3000); // 3 seconds of loading

  setTimeout(function() {
      window.location.href = "Services.html"; // Redirect to the landing page
  }, 3000); // 3 seconds of loading
};

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function animateTextColors() {
        const brandName = document.querySelector('.hero-content h2');
        setInterval(() => {
            brandName.style.color = getRandomColor();
        }, 500); // Change color every 500ms
    }

    window.onload = function () {
        animateTextColors();
    };
    setTimeout(function() {
      window.location.href = "Services.html"; // Redirect to the landing page
  }, 2000); // 5 seconds of loading
