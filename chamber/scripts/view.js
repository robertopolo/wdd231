const gridViewButton = document.querySelector('#grid-view-button');
const listViewButton = document.querySelector('#list-view-button');
const container = document.querySelector('#cards-container');

container.setAttribute('class', 'grid');

gridViewButton.addEventListener('click', () => {
  container.setAttribute('class', 'grid');
});
listViewButton.addEventListener('click', () => {
  container.setAttribute('class', 'list');
});
