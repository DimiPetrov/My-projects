import { toGifsSimple } from './gif-views.js';

/**
 * @author Mihail Enev 
 */
export const toSearchView = (gifs, searchTerm) => `
<div id="gifs">
  <h1>Gifs found for "${searchTerm}":</h1>
  <div class="content">
    ${gifs.map(toGifsSimple).join('\n')}
  </div>
</div>
`;