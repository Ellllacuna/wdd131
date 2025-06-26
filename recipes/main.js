import recipes from './recipes.js'; 

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function recipeTemplate(recipe) {
    return `<section id="recipe=card" class="recipe-card">
            <img src="${recipe.image}" alt="Apple Crisp">
            <div class="info">
                <ul class="tag">
                    ${tagsTemplate(recipe.tags)}
                </ul>
                <div class="namerate">
                    <h2 class=recipeName>${recipe.name}</h2>
                    ${ratingTemplate(recipe.rating)}
                </div>
                 <p class="recipeDesc">${recipe.description}</p>
            </div>
            </section>
           
        `
}

function tagsTemplate(tags) {
    let tagsList = tags.map(tag => `<li>${tag}</li>`).join("");
    return tagsList
}

function ratingTemplate(rating) {
    rating = Number(rating);

    let html = `<span
    class="rating"
    role="img"
    aria-label="rating: ${rating} out of 5 stars"
>`;
    for (let i = 0; i<5; i++) {
        if (i < rating) {
            html += "⭐";
        } else if (i >= rating) {
            html += "☆";
        }
    }

    html += `</span>`;
    return html;
}

const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));


function renderRecipes(recipeList) {
    const container = document.getElementById('recipe-card-container');

    container.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
}

function renderRandomRecipe(recipeList) {
    const container = document.getElementById('recipe-card-container');
    const randomRecipe = getRandomListEntry(recipeList);
    container.innerHTML = recipeTemplate(randomRecipe);
}

function filterRecipes(query) {
    const lowerQuery = query.toLowerCase();

    const filtered = recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(lowerQuery) ||
            recipe.description.toLowerCase().includes(lowerQuery) ||
            (recipe.tags && recipe.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) ||
            (recipe.recipeIngredient && recipe.recipeIngredient.some(ing => ing.toLowerCase().includes(lowerQuery)))
        );
    });

    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));

    renderRecipes(sorted);
}

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    filterRecipes(query);
})

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        filterRecipes(searchInput.value.trim());
    }
})

renderRandomRecipe(recipes);