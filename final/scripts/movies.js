import { createMovieCard } from './modules/moviecard.mjs';
import { toggleFavorite } from './modules/favorite.mjs';
import { modal } from './modules/modal.mjs';

const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const movies = await fetchData();

async function fetchData(){
  try {
    const response = await fetch('./data/movies.json');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const m = await response.json();

    return m
  } catch (err) {
    console.log(err);
  }
}

movies.forEach((movie) => {
  const movieCard = createMovieCard(favorites, movie);

  movieCard.addEventListener('click', (e) => {
    const favBtn = e.target.closest('.fav-btn');
    const detailsBtn = e.target.closest('.details-btn');
    if (favBtn) {
      const movieId = favBtn.dataset.movieId;
      toggleFavorite(movieId, favBtn);
    } else if (detailsBtn) {
        const movieId = detailsBtn.dataset.movieId;
        const selectedMovie = movies.find(m => m.id === parseInt(movieId));
        if (selectedMovie) {
          modal(selectedMovie);
        };
    }
  });
});