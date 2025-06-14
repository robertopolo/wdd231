const descriptions = [
  {
    name: 'non-profit',
    description:
      'Affordable access to essential benefits including event discounts and basic training sessions.',
    price: 0,
  },
  {
    name: 'bronze',
    description:
      'Enhanced benefits with access to select special events and advertising opportunities.',
    price: 10,
  },
  {
    name: 'silver',
    description:
      'Expanded training programs, priority event invitations, and increased advertising visibility.',
    price: 20,
  },
  {
    name: 'gold',
    description:
      'Premium benefits including spotlight advertising on the homepage, exclusive events, and maximum discounts.',
    price: 30,
  },
];
const dialogBox = document.querySelector('#dialog-box');
const buttons = document.querySelectorAll('div.card-join button');

function displayDescription(membership) {
  dialogBox.innerHTML = '';
  dialogBox.innerHTML = `
  <button id="close-modal">❌</button>
  <h3>${membership.name}</h3>
  <p><span>Benefits</span>:<p>
  <p>${membership.description}</p>
  <p><span>Price</span>: $${membership.price}</p>
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
