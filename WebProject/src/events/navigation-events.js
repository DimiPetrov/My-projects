import { ABOUT, CONTAINER_SELECTOR, FAVORITES, HOME, TRENDING, UPLOAD } from "../common/constants.js"
import { toAboutView } from "../views/about-view.js"
import { q, setActiveNav } from "../events/helpers.js"
import { toHomeView } from "../views/home-view.js";
import { getFavorites } from "../data/favorites.js";
import { toFavoritesView } from "../views/favorite-views.js";
import { loadSingleGif } from "../requests/request-service.js";
import { renderTrendingItems } from "./trending-events.js";
import { toSingleGifDetails } from "../views/gif-views.js";
import { uploadGifView } from "../views/uploadGifs-view.js";


export const loadPage = (page = '') => {
    switch(page){
        case ABOUT:
            setActiveNav(ABOUT);
            return renderAbout();   
        case HOME:
            setActiveNav(HOME);
            return renderHome();
        case FAVORITES:
            setActiveNav(FAVORITES);
            return renderFavorites();
        case TRENDING:
            setActiveNav(TRENDING);
            return renderTrendingItems();
        case UPLOAD:
            setActiveNav(UPLOAD);
            return renderUploadGif();

        default:
            return null;
}
}
/**
 * @author Mihail Enev
 */

/**
 * Using this "render" function bellow we are adding the implementation 
 * of our html from about-view.js file
 * to the id=container, inside the index.html file.
 */
const renderAbout = () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
}
/**
 * @author Mihail Enev
 */

/**
 * Using this "render" function bellow we are adding the implementation 
 * of our html file from home-view.js file
 * to the id=container, inside the index.html file.
 */
const renderHome = () => {
    q(CONTAINER_SELECTOR).innerHTML = toHomeView();
}

/**
 * @author Mihail Enev
 */

 /**
 * Here we are mapping our array in order to load a single gif by its id,
 * using the function loadSingleGif(gifId), which I have implemented in the,
 * request-service.js file. Then the result, or in our case it is called 'gifs',
 * is adding our html implementation from toFavoritesView(gifs) function,
 * which is inside favorite-views.js file.
 */
const renderFavorites = () => {
    Promise.all(getFavorites().map((gifId) => loadSingleGif(gifId)))
    .then(gifs => q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(gifs));
};

/**
 * @author Mark Yosifov
 */
/**
 * We load the ID of the selected gif by gving the string to the
 * loadSingleGif function which then load the data into the container
 * as an object,
 */
export const renderGifDetails = (id) => {
    loadSingleGif(id)
    .then(result => q(CONTAINER_SELECTOR).innerHTML = toSingleGifDetails(result.data));
};

/**
 * @author Dimitar Petrov
 */
/**
 * Using this "render" function bellow we are adding the implementation 
 * of our html file from uploadGifs-view.js file
 * to the id=container, inside the index.html file. 
 */
export const renderUploadGif = () => {
    q(CONTAINER_SELECTOR).innerHTML = uploadGifView();
}

