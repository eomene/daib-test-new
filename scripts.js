

document.addEventListener('DOMContentLoaded', function () {
  const darkModeSwitch = document.getElementById('darkModeSwitch');
  darkModeSwitch.addEventListener('change', toggleDarkMode);

  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
});