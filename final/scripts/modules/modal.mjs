const dialogBox = document.querySelector('#movie-details');
const buttons = document.querySelectorAll('div.card-join button');

function displayDescription(m) {
  dialogBox.innerHTML = '';
  dialogBox.innerHTML = `
  <button id="close-modal">❌</button>
  <h3>${m.name}</h3>
  <p><span>Benefits</span>:<p>
  <p>${m.description}</p>
  <p><span>Price</span>: $${m.price}</p>
  `;

  dialogBox.showModal();

  const closeModal = document.querySelector('#close-modal');

  closeModal.addEventListener('click', () => {
    dialogBox.close();
  });
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    dialogBox.innerHTML = '';

    let m = descriptions.find((desc) => desc.name === button.id);

    displayDescription(m);
  });
});
