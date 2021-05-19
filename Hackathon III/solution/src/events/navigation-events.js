import { CONTAINER_SELECTOR, HOME,CATEGORIES, FAVORITES, ABOUT } from '../common/constants.js';
import { toHomeView } from '../views/home-view.js';
import { toCategoriesView } from '../views/category-view.js'
import { toMoviesFromCategoryView, toSingleMovieView } from '../views/movie-views.js';
import { q, setActiveNav } from './helpers.js';
import { getMovieById, getCategories, getCategory, getMoviesGeneralInfo } from '../data/movies.js';
import { getFavorites } from '../data/favorites.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toAboutView } from '../views/about-view.js';

// public API
//Mark
export const loadPage = (page = "") => {
  switch (page) {
    case HOME:
      setActiveNav(HOME);
      return renderHome();
    case CATEGORIES:
      setActiveNav(CATEGORIES);
      return renderCategories();
    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();
    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();

    /* if the app supports error login, use default to log mapping errors */
    default:
      return null;
  }
};


/**
 * @author Dimitar Petrov
 */
export const renderMovieDetails = (id = null) => {
  const movie = getMovieById(id);

  q(CONTAINER_SELECTOR).innerHTML = toSingleMovieView(movie);
 
};
/**
 * @author Dayana Kirilova
 */
export const renderCategory = (categoryId = null) => {
  const category = getCategory(categoryId);
  const movies = getMoviesGeneralInfo(categoryId);

  q(CONTAINER_SELECTOR).innerHTML = toMoviesFromCategoryView(category, movies);
};

// private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

/**
 * @author Mihail Enev
 */
const renderCategories = () => {
  q(CONTAINER_SELECTOR).innerHTML = toCategoriesView(getCategories());
};

/**
 * @author Tsvetelina Kyoseva
 */
const renderFavorites = () => {
  const favoritesMovies = getFavorites().map( id => getMovieById(id));
  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favoritesMovies);
};

/** 
  * @author Ivan Cerovski
  */
const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
