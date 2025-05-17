const year = document.querySelector('#currentyear');
const modified = document.querySelector('#lastModified');

const today = new Date();
const modifiedDate = document.lastModified;

year.textContent = today.getFullYear();
modified.innerHTML = `Last update: ${modifiedDate}`;