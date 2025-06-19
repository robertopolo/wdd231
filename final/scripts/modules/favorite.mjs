export function toggleFavorite(movieId, btn) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const index = favorites.indexOf(movieId);
  const isFav = index !== -1;

  if (isFav) {
    favorites.splice(index, 1);
    btn.classList.remove('is-favorite');
  } else {
    favorites.push(movieId);
    btn.classList.add('is-favorite');
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}
