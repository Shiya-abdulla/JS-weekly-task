let recipesData = [];

// Fetch recipes data
const res = fetch('https://dummyjson.com/recipes');
res.then((resolve) => resolve.json())
   .then((val) => {
       recipesData = val.recipes; // Store recipes data
       displayRecipes(recipesData); // Display all recipes initially
   })
   .catch((err) => console.log(err));

// Function to display recipes
function displayRecipes(recipes) {
    const recipeList = document.querySelector('.d1');
    recipeList.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('card', 'col-lg-3', 'col-md-4', 'mb-4');
        recipeCard.style.height = '400px';

        recipeCard.innerHTML = `
         
            <h3 class="mt-5 ms-5">${recipe.name}</h3>
            <div class="card-body ">
                <h5 class="card-title" style="max-height: 100px; overflow-y: auto;">${recipe.ingredients}</h5>
                <h6 class="card-title" style="max-height: 100px; overflow-y: auto;">${recipe.instructions}</h6>
            </div>
        `;

        recipeList.appendChild(recipeCard);
    });
}

// Search button click handler
document.getElementById('search-button').onclick = function() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredRecipes = recipesData.filter(function(recipe) {
        return recipe.name.toLowerCase().includes(searchTerm);
    });
    displayRecipes(filteredRecipes);
};
