export function modal(m) {
  const dialogBox = document.querySelector('#movie-details');
  // const buttons = document.querySelectorAll('div.card-join button');

  dialogBox.innerHTML = '';
  dialogBox.innerHTML = `
  <button id="close-modal">❌</button>
  <h3>${m.title}</h3>
  <p><span>Overview</span>:<p>
  <p>${m.overview}</p>
  `;

  dialogBox.showModal();

  const closeModal = document.querySelector('#close-modal');

  closeModal.addEventListener('click', () => {
    dialogBox.close();
  });
}
// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     dialogBox.innerHTML = '';

//     let m = descriptions.find((desc) => desc.name === button.id);

//     displayDescription(m);
//   });
// });
