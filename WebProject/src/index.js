import { CONTAINER_SELECTOR, HOME } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorite-events.js';
import { q } from './events/helpers.js';
import { loadPage, renderGifDetails } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { uploadGif } from './requests/request-service.js';


document.addEventListener('DOMContentLoaded', () => {
    
    document.addEventListener('click', e => {
        
        /**
         * @author Mihail Enev
         */
        
        /**
         * Here, every target, that contains class named 'nav-link' and
         * attribute - 'data-page' will have an event 'click' available.
         *
         */
        if (e.target.classList.contains('nav-link')) {

            loadPage(e.target.getAttribute('data-page'));
        }

        /**
         * @author Mihail Enev
        */
       
        /**
         * If the target contains class named 'favorite' and
         * attribute - 'data-gif-id' attach an event 'click' on it...
         */
        if (e.target.classList.contains('favorite')){

            toggleFavoriteStatus(e.target.getAttribute('data-gif-id'))
        }

        /**
         * @author Mihail Enev
        */

        /**
         * Here I am implementing the button we are using, 
         * in order to search for different gifs by a searchTerm typed.
         * Basicaly. we are making the button work here, however,
         * not by searching for a specific class, but by id.
         */
       
        if (e.target.id === "btnSearch"){

            e.preventDefault();
           const searchTerm = q('input#search').value
           q(CONTAINER_SELECTOR).innerHTML = renderSearchItems(searchTerm);
        }
        
        /**
         *@author Mark Yosifov
         */
        /**
         * Checks if a details button exist.
         * If it's true it calls the renderGifDetails function
         * which now has the attributes of 'data-giv-id'
         */
        if (e.target.classList.contains('details-button')) {
            
            renderGifDetails(e.target.getAttribute('data-gif-id'));
        } 
        
        /**
         * @author Dimitar Petrov
         */
        /**
         * This if-clause makes the button "Upload new Gif" works.
         */
        if (e.target.id === "upload") {

            loadPage(e.target.getAttribute('data-page'));
        };

        /**
         * The same purpose as above, but regarding "Upload"
         * button in the inner page.
         */

        if(e.target.id === 'uploadBtn') {

            e.preventDefault();

            const form = document.querySelector('form');

            const formData = new FormData(form); 

            uploadGif(formData);
            
            /**
             * @author Mihail Enev
             */
            function showMessage() {
                alert('Thank you for uploading a gif via our website!');
           }
           showMessage();
        }
       

    });
    loadPage(HOME);
})