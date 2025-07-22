// Toggle Dark Mode
document.getElementById('darkToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Scroll to Top
const scrollBtn = document.getElementById('scrollTopBtn');
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// AOS Init
AOS.init({
  duration: 1000,
  once: true
});