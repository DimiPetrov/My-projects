import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import { getFavorites } from '../data/favorites.js';

export const q = (selector) => document.querySelector(selector);

export const qs = (selector) => document.querySelectorAll(selector);

export const setActiveNav = (page) => {
    const navs = qs('a.nav-link');
  
    Array
      .from(navs)
      .forEach(element => element
        .getAttribute('data-page') === page
        ? element.classList.add('active')
        : element.classList.remove('active')
        );
  };
  /**
   * @author Mihail Enev
   */
  
  /**
   *  With this function bellow, we are making the implementation of the heart button,
   *  which goes to solid red color when clicked on and an empty heart when clicked again,
   *  or not clicked at all.
   */
  export const renderFavoriteStatus = (gifId) => {
    const favorites = getFavorites();
  
    return favorites.includes(gifId)
      ? `<span class="favorite active" data-gif-id="${gifId}">${FULL_HEART}</span>`
      : `<span class="favorite" data-gif-id="${gifId}">${EMPTY_HEART}</span>`;
  }; 