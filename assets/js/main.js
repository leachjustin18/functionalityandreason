const mobileMenuLabel = document.getElementById('mobileMenuLabel');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuLabel.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    mobileMenu.checked = !mobileMenu.checked
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    mobileMenu.checked = false;
  }
});