import { toTrendingView } from "../views/trending-view.js";
import { loadTrendingViews } from "../requests/request-service.js";
import { q } from "./helpers.js";
import { CONTAINER_SELECTOR } from "../common/constants.js";


/**
 * @author Desislava Milanova
 */
/**
 * Here we are using our function loadTrendingViews in order to,
 * use the endpoints we are fetching inside request-service.js file and again,
 * as a result to add our html implemented in toTrendingView function,
 * inside the global html file - index.html.
 */

  export const renderTrendingItems = () => {
    loadTrendingViews()
    .then(result => q(CONTAINER_SELECTOR).innerHTML = toTrendingView(result.data));
  }
