/**
* @author Mihail Enev
*/

/**
* Here, we are 'getting' the item 'favorites' from the local storage,
*  using getItem() method
*/
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export const addFavorite = (gifId) => {
  if (favorites.find(id => id === gifId)) {
    return;
  }

  favorites.push(gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const removeFavorite = (gifId) => {
  favorites = favorites.filter(id => id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const getFavorites = () => [...favorites];
