document.addEventListener("DOMContentLoaded", () => {
  const fadingElements = document.querySelectorAll(".fading-content");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
          }
      });
  }, { threshold: 0.5 });

  fadingElements.forEach((element) => {
      observer.observe(element);
  });
});
