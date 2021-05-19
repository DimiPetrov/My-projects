import { toGifsSimple } from './gif-views.js';


/**
 * @author Desislava Milanova
 */
export const toTrendingView = (gifs) => `
<div id="gifs">
  <div class="content">
    ${gifs.map(toGifsSimple).join('\n')}
  </div>
</div>
`;
