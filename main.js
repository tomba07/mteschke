// Auto-update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const burger = document.querySelector('.nav__burger');
const links  = document.querySelector('.nav__links');

burger.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!open));
  links.classList.toggle('is-open', !open);
});

// Close mobile nav when a link is clicked
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.setAttribute('aria-expanded', 'false');
    links.classList.remove('is-open');
  });
});

// Scroll-triggered fade-in
const fadeEls = document.querySelectorAll(
  '.hero, .about__grid, .timeline-item, .skills-group, .contact__inner'
);

const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);

fadeEls.forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  observer.observe(el);
});
