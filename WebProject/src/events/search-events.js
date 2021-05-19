import { toSearchView } from "../views/search-view.js";
import { loadSearchGifs } from "../requests/request-service.js";
import { q } from "./helpers.js";
import { CONTAINER_SELECTOR } from "../common/constants.js";

/**
 * @author Mihail Enev
 */

/**
 * Here we are using our function loadSearchGifs(searchTerm) in order to,
 * use the endpoints we are fetching inside request-service.js file and again,
 * as a result to add our html implemented in toSearchView function,
 * inside the global html file - index.html.
 */
export const renderSearchItems = (searchTerm) => {
    loadSearchGifs(searchTerm)
    .then(result => q(CONTAINER_SELECTOR).innerHTML = toSearchView(result.data, searchTerm));
  }
