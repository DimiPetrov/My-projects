import { toSearchView } from "../views/search-view.js";
import { searchMovies } from "../data/movies.js";

/**
 * @author JJ - Zhulien Zhivkov
 */
export const renderSearchItems = (searchTerm) =>
  toSearchView(searchMovies(searchTerm), searchTerm);
