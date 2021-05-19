import { renderFavoriteStatus } from '../events/helpers.js';

/**
 * @author Mihail Enev 
 */
export const toGifsSimple = (gif) => `
<div class="gif-simple">
    <div class="title">Title & Creator: ${gif.title}</div>
    <div class="release-year">Date & Time of release: ${gif.import_datetime}</div>
    <div>
      <img src="${gif.images.original.url}">
    </div>
    <div class="view-details-button">
    <button class="details-button" data-gif-id="${gif.id}">View details</button>
    ${renderFavoriteStatus(gif.id)}
    </div>
  </div>
`;

export const toGifsSimpleFav = (gif) => `
<div class="gif-simple">
    <div class="title">${gif.data.title}</div>
    <div class="release-year">${gif.data.import_datetime}</div>
    <div>
      <img src="${gif.data.images.original.url}">
    </div>
    <div class="view-details-button">
    <button class="details-button" data-gif-id="${gif.data.id}">View details</button>
    ${renderFavoriteStatus(gif.data.id)}
    </div>
  </div>
`;

/**
 * @author Mark Yosifov
 */

export const toSingleGifDetails = (gif_id)  => {
  return `
  <h4>${gif_id.title}</h4>
  <div class="gif-content-details">
    <div class="right-side">
      <img src="${gif_id.images.original.url}">
    </div>
    <div class="left-side">
      <p><b>User: ${gif_id.username} </p>
      <p>Imported: ${gif_id.import_datetime}</p>
      <p>Trending: ${gif_id.trending_datetime}</b></p>
      <p><form action=${gif_id.embed_url}>
      <button  type="submit" class="button" name="Embed" value="your_value" class="btn-link">Embed URL</button>
      </form> </p>
      <p><form action=${gif_id.bitly_gif_url}>
      <button  type="submit" class="button" name="Embed" value="your_value" class="btn-link">BitFly GIF URL</button>
      </form> </p>
      </div>
  </div>
`
}