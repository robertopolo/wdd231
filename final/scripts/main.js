//Menu module
import { toggleMenu } from './modules/navigation.mjs';

//Menu variables - Start
const hamburgerButton = document.querySelector('#menu-button');
const menuItems = document.querySelector('#animateme');
const links = document.querySelectorAll('.menu-links li');
//Menu variables - End

//Menu event listener - Start
hamburgerButton.addEventListener('click', () => {
    toggleMenu(hamburgerButton, menuItems);
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        toggleMenu(hamburgerButton, menuItems);
    });
});
//Menu event listener - End


