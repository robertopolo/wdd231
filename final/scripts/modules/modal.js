// export function setupModal() {
//   const modal = document.querySelector('#movie-modal');
//   const modalContent = document.querySelector('#modal-content');

//   // Cerrar modal por botón
//   modal.addEventListener('click', (event) => {
//     if (
//       event.target.id === 'movie-modal' || 
//       event.target.id === 'close-modal'
//     ) {
//       closeModal();
//     }
//   });

//   // Cerrar modal con tecla ESC
//   window.addEventListener('keydown', (event) => {
//     if (event.key === 'Escape' && modal.classList.contains('show')) {
//       closeModal();
//     }
//   });
// }

// export function openModal(title, description) {
//   const modal = document.querySelector('#movie-modal');
//   const modalContent = document.querySelector('#modal-content');

//   modalContent.innerHTML = `
//     <h2>${title}</h2>
//     <p>${description}</p>
//     <button id="close-modal">Close</button>
//   `;

//   modal.classList.add('show');
// }

// export function closeModal() {
//   const modal = document.querySelector('#movie-modal');
//   modal.classList.remove('show');
// }
