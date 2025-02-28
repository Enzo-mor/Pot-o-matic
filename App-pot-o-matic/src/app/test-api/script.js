const apiKey = '1a9bf113672749e79f5a5d6a92a44e72' ; // Replace with your API key

// Select elements
const searchQueryInput = document.getElementById('search-query');
const searchButton = document.getElementById('search-button');
const recipeContainer = document.getElementById('recipe-container');
const loadingText = document.getElementById('loading');
const recipeDetailsContainer = document.getElementById('recipe-details');

// Add event listener for the search button
searchButton.addEventListener('click', () => {
    const query = searchQueryInput.value.trim();

    if (query) {
        fetchRecipes(query);
    } else {
        alert('Please enter a search query!');
    }
});

// Fetch data from Spoonacular API
function fetchRecipes(query) {
    loadingText.style.display = 'block'; // Show loading text
    recipeContainer.innerHTML = ''; // Clear previous results
    recipeDetailsContainer.innerHTML = ''; // Clear previous details

    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const recipes = data.results;
            console.log('Fetched recipes:', recipes); // Debugging log

            // Hide loading text
            loadingText.style.display = 'none';

            // Check if no results
            if (recipes.length === 0) {
                recipeContainer.innerHTML = '<p>No recipes found. Try a different search.</p>';
                return;
            }

            // Display recipes
            recipes.forEach(recipe => {
                const recipeElement = document.createElement('div');
                recipeElement.classList.add('recipe-card');

                const recipeImage = recipe.image ? `<img src="https://spoonacular.com/recipeImages/${recipe.image}" alt="${recipe.title}">` : '';
                const recipeTitle = `<h3>${recipe.title}</h3>`;
                const recipeUrl = `<p><a href="#" onclick="fetchRecipeDetails(${recipe.id})">View Details</a></p>`;

                recipeElement.innerHTML = recipeImage + recipeTitle + recipeUrl;
                recipeContainer.appendChild(recipeElement);
            });
        })
        .catch(error => {
            console.error('Error fetching data from Spoonacular API:', error);
            loadingText.textContent = 'Failed to load recipes.';
        });
}

// Fetch the details of a specific recipe by its ID
function fetchRecipeDetails(recipeId) {
    loadingText.style.display = 'block'; // Show loading text
    recipeDetailsContainer.innerHTML = ''; // Clear previous details
}

