document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('formSuccess');

  if (!form || !successMessage) return;

  form.addEventListener('submit', () => {
    successMessage.style.display = 'block';
  });
});
