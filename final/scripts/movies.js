import { openModal } from './modal.js';

const apiUrl = 'https://api.sampleapis.com/movies/action'; // Ejemplo público. Reemplaza si usas otra API.

export async function loadMovies() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`Fetch failed: ${response.status}`);

    const movies = await response.json();
    displayMovies(movies.slice(0, 15)); // Limitamos a 15 items
  } catch (error) {
    console.error('Error fetching movie data:', error);
    displayError();
  }
}

function displayMovies(movieList) {
  const container = document.querySelector('#movie-cards');

  movieList.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('movie-card');

    card.innerHTML = `
      <img src="${movie.posterURL || 'images/placeholder.jpg'}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p><strong>Year:</strong> ${movie.year}</p>
      <p><strong>Genre:</strong> ${movie.genres?.join(', ') || 'N/A'}</p>
      <button class="details-btn" data-title="${movie.title}" data-description="${movie.plot || 'No plot available'}">Details</button>
    `;

    container.appendChild(card);
  });

  // Attach modal openers
  document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const title = e.target.dataset.title;
      const description = e.target.dataset.description;
      openModal(title, description);
    });
  });
}

function displayError() {
  const container = document.querySelector('#movie-cards');
  container.innerHTML = `
    <p class="error">Failed to load movies. Please try again later.</p>
  `;
}

// Modal function to be called from modal.js (global)
function openModal(title, description) {
  const modal = document.querySelector('#movie-modal');
  const modalContent = document.querySelector('#modal-content');

  modalContent.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
    <button id="close-modal">Close</button>
  `;

  modal.classList.add('show');
}
