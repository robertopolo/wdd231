const greeting = document.querySelector('#greeting');
const msToDays = 86400000;

if (localStorage) {
  const lastVisited = localStorage.getItem('lastVisited');

  if (lastVisited === null) {
    greeting.innerHTML = `
        <button id="close-modal">❌</button>
        <h3>Welcome! Let us know if you have any questions.</h3>
        `;

    localStorage.setItem('lastVisited', Date.now());
  } else {
    const d = (Date.now() - lastVisited) / msToDays;

    if (d < 1) {
      greeting.innerHTML = `
            <button id="close-modal">❌</button>
            <h3>Back so soon! Awesome!</h3>
            `;
    } else {
      greeting.innerHTML = `
            <button id="close-modal">❌</button>
            <h3>You last visited ${parseInt(d)} day${
        d === 1 ? '' : 's'
      } ago</h3>
            `;
    }
  }

  const closeModal = document.querySelector('#close-modal');

  closeModal.addEventListener('click', () => {
    greeting.close();
  });
}

greeting.showModal();
