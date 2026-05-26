const animatedElements = document.querySelectorAll(
  ".who-text, .who-card, .value-card, .cta-box"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

animatedElements.forEach(element => {
  element.classList.add("hidden");
  observer.observe(element);
});