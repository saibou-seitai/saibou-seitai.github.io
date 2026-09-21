const sections = document.querySelectorAll('.timeline');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.dataset.visible = 'true';
  });
}, { threshold: 0.15 });

sections.forEach((section) => observer.observe(section));
