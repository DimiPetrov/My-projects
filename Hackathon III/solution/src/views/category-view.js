export const toCategoriesView = (categories) => `
<div id="categories">
  <h1>Categories</h1>
  <div class="content">
    ${categories.map(toSingleCategoryView).join('\n')}
  </div>
</div>
`;

/**
 * @author Mihail Enev
 */
const toSingleCategoryView = (category) => `
<div class = "category" id = ${category.id}>
<h1>${category.name}</h1>
<p>${category.moviesCount} movies</p>
<a class = "viewCategory" href = "#" id = ${category.id}>View Category</a>
</div>
`;
