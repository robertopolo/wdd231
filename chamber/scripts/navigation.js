const hamburgerButton = document.querySelector('#menu-button');
const menu = document.querySelector('#animateme');
const links = document.querySelectorAll('.menu-links li');

const toggleMenu = () => {
  hamburgerButton.classList.toggle('open');
  menu.classList.toggle('open');
};

hamburgerButton.addEventListener('click', () => {
  toggleMenu();
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    // links.forEach((link) => {
    //   link.classList.remove('current-menu-item');
    // });
    // link.classList.toggle('current-menu-item');
    toggleMenu();
  });
});
