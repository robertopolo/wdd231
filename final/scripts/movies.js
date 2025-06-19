import movies from '../data/movies.mjs';
import { toggleFavorite } from './modules/favorite.mjs';

const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
const gallery = document.querySelector('#movie-gallery');
const baseUrl = 'https://image.tmdb.org/t/p/w200';

movies.forEach((movie) => {
  const isFavorite = favorites.includes(movie.id.toString());
  const movieCard = document.createElement('div');

  movieCard.innerHTML = `
    <button class="fav-btn ${isFavorite ? 'is-favorite' : 'none'}" data-movie-id="${movie.id}">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="#eab308" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
    </button>
    <img src="${baseUrl + movie.poster_path}" alt="${movie.title
    .replaceAll(' ', '-')
    .toLowerCase()}">
    <button class=details-btn data-movie-id="${movie.id}">Details</button>
  `;

  gallery.appendChild(movieCard);

  movieCard.addEventListener('click', (e) => {
    if (e.target.closest('.fav-btn')) {
      const btn = e.target.closest('.fav-btn');
      console.log(btn.dataset);
      const movieId = btn.dataset.movieId;

      toggleFavorite(movieId, btn);
    } else if (e.target.closest('.details-btn')) {
      console.log(e);
    }
  });
});