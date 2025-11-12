const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
});
hiddenElements.forEach(el => observer.observe(el));

// Бургер-меню
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');
burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Переключатель темы
const toggle = document.querySelector('.theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});