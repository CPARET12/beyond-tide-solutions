const animatedElements = document.querySelectorAll(
  ".visibility-card, .dashboard-card, .process-step, .use-case-item, .cta-box"
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