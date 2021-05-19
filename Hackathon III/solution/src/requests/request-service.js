import { getCategories, getMoviesGeneralInfo, getMovieById, getCategory, searchMovies } from '../data/movies.js';

/** 
  * @author JJ - Zhulien Zhivkov
  */
export const loadCategories = () => getCategories();

export const loadCategory = (id = null) => {
  const category = getCategory(id);

  return category;
}
/**
 * @author Dimitar Petrov
 */
export const loadMovies = (categoryId = null) => {
  const movie = getMoviesGeneralInfo(categoryId);

  return movie;
};

/** 
  * @author Ivan Cerovski
  */
export const loadSingleMovie = (id) => getMovieById(id);

/**
 * @author Tsvetelina Kyoseva
 */
export const loadSearchMovies = (searchTerm = '') => searchMovies(searchTerm);

