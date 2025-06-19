const hamburgerButton = document.querySelector('#menu-button');
const menuItems = document.querySelector('#animateme');
const links = document.querySelectorAll('.menu-links li');

hamburgerButton.addEventListener('click', () => {
  toggleMenu(hamburgerButton, menuItems);
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    toggleMenu(hamburgerButton, menuItems);
  });
});

function toggleMenu() {
  hamburgerButton.classList.toggle('open');
  menuItems.classList.toggle('open');
}
