import { toGifsSimpleFav } from './gif-views.js';

/**
 * @author Mihail Enev
 */
export const toFavoritesView = (gifs) => `
<div id="gifs">
  <h1>Favorite gifs:</h1>
  <div class="content">
    ${gifs.map(toGifsSimpleFav).join('\n') || '<p>Add some gifs to favorites to see them here.</p>'}
  </div>
</div>
`;
