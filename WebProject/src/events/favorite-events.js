import { addFavorite, getFavorites, removeFavorite } from '../data/favorites.js';
import { q, renderFavoriteStatus } from './helpers.js';

/**
 * @author Mihail Enev 
*/

/**
 * Here we check if the variable 'favorites' (which is an array overall),
 * includes the gif id in it.
 */
export const toggleFavoriteStatus = (gifId) => {
  const favorites = getFavorites();
  if (favorites.includes(gifId)) {
    removeFavorite(gifId);
  } else {
    addFavorite(gifId);
  }

  q(`span[data-gif-id="${gifId}"]`).innerHTML = renderFavoriteStatus(gifId);
};