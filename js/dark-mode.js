

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.createElement('div');
  toggle.classList.add('dark-mode-toggle');
  toggle.textContent = 'Toggle Dark Mode';
  toggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });
  document.body.appendChild(toggle);
});

