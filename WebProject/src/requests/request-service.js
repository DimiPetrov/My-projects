import {API_KEY, API_URL } from "../common/constants.js";

/**
 * @author Mihail Enev 
 */

 /**
 * In both functions bellow we are using the given endpoint
 * from developers giphy website, in order to fetch over it.
 * To make it more clear, we are taking the giphy api data that we need,
 * using the endpoints that the developer's version of the site is providing us.
 * This can be implemented with 'async-await' and will be shown bellow loadSingleGif.
 */
export const loadSearchGifs = (searchTerm = null) => {

    return fetch(`${API_URL}gifs/search?q=${searchTerm}&${API_KEY}&limit=2`)
        .then(response => response.json())
        .catch(err => console.log(err.message));
};

/**
 * @author Mihail Enev
 */
export const loadSingleGif = (gifId) => {
    
    return fetch(`${API_URL}gifs/${gifId}?${API_KEY}`)
        .then(response => response.json()); 
};

/**
 * The same functionality as the one above, but using await and async...
 */
// export const loadSearchGifs = async(searchTerm = null) => {
//     const response = await fetch(`${API_URL}/gifs/search?q=${searchTerm}&${API_KEY}&limit=2`);
//     const result = await response.json();
//     return result
// }

// export const loadSingleGif = async(gifId) => {
//     const result = await ((await fetch(`${API_URL}/gifs/${gifId}?${API_KEY}`)).json());
//     return result;
// }


/**
 * @author Desislava Milanova
 */
/**
 * The purpose of this function is to display trending gifs
 * from the server.
 */
  export const loadTrendingViews = () => {

    return fetch(`${API_URL}gifs/trending?${API_KEY}&limit=10`)
        .then(response => response.json());
};
 
/**
 * @author Dimitar Petrov
 */
/**
 * We use this function to upload gifs from the server
 * using a POST request.
 */ 
export const uploadGif = (file) => {

    return fetch(`http://upload.giphy.com/v1/gifs?${API_KEY}`, {
        method: 'POST',
        body: file,
    })
    .then((resolve) => resolve.json())
    .then((result) => console.log(result.data.id))
    .catch(error => console.log(error.message));
}

