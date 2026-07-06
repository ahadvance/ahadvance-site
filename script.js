const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle?.addEventListener('click', () => {
  siteNav?.classList.toggle('open');
});

// Smooth scroll for anchor links.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      siteNav?.classList.remove('open');
    }
  });
});
