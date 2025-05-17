const home = document.querySelector('#menu a');
const hambButton = document.querySelector('#hamb-button');
const menu = document.querySelector('#menu');
const links = document.querySelectorAll('#menu a');

const toggleMenu = () => {
  hambButton.classList.toggle('opened');
  menu.classList.toggle('opened');
};

home.classList.add('active');

hambButton.addEventListener('click', () => {
  toggleMenu();
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    links.forEach((link) => {
      link.classList.remove('active');
    });
    link.classList.toggle('active');
    toggleMenu();
  });
});
