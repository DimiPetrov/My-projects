import { renderFavoriteStatus } from '../events/helpers.js';

export const toMoviesFromCategoryView = (category, movies) => `
<div id="movies">
  <h1>${category.name} movies:</h1>
  <div class="content">
    ${movies.map(toMovieSimple).join('\n')}
  </div>
</div>
`;


/**
* @author Mark Yosifov
*/
export const toSingleMovieView = (movie) => {
  return `
  <h1>${movie.title} (${movie.year})</h1>
  <div class="movie-content">
    <div class="right-side">
      <img src="${movie.poster}">
    </div>
    <hr class="style1">
    <div class="left-side">
      <p>Genre: ${movie.genre}</p>
      <p>Director: ${movie.director}</p>
      <p>Starring: ${movie.stars.join(", ")}</p>
      <p>Plot: ${movie.description}</p>
    </div>
  </div>
`
}

/**
 * @author Dayana Kirilova
 */
export const toMovieSimple = (movie) => `
<div class="movie-simple">
    <div class="title">${movie.title}</div>
    <div class="release-year">${movie.year}</div>
    <div>
      <img src="${movie.poster}" />
    </div>
    <div class="view-details-button">
    <button class="details-button" data-movie-id="${movie.id}">View details</button>
    ${renderFavoriteStatus(movie.id)}
    </div>
  </div>
`;

const toMovieDetailed = (movie) => `
<!-- your template here -->
`;
