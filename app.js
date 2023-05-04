const ul = document.querySelector(".meal__ul");
const input = document.querySelector("input");

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    search();
  }
});
let inputText = "";
function inputChange(event) {
  inputText = event.target.value;
}
function search() {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
  .then((response) => response.json())
  .then((data) => {
    let meal = data.meals;
      if (!meal || inputText === "") {
        ul.innerHTML = `<h1>No meals available</h1>`;
        return;
      }
      ul.innerHTML = meal
        .map(
          (elem) => `
            <li class="meal__li">
            <div>
            <div class="meal__image--wrapper">
            <img src="${elem.strMealThumb}"/>
            </div>
            <div class="recipe__title--wrapper">
            <h1>${elem.strMeal}</h1>
            <h3>Area : ${elem.strArea}</h3>
            </div>
            </div>
                <div class="button__wrapper">
                    <button class="viewBtn" onclick="toggleRecipe();recipeDetail(${elem.idMeal})"> 
                    View Recipe
                    </button>
                </div>
            </li>
            `
        )
        .join("");
    });
}
const btn = document.querySelector(".viewBtn");
const mealDetails = document.querySelector(".meal__content--wrapper");
let recipeOpen = false;
let recipe;
function recipeDetail(id) {
  recipe = false;
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json())
    .then((data) => {
      let myRecipe = data.meals[0];
      const ingr = [myRecipe.strIngredient1,myRecipe.strIngredient2,myRecipe.strIngredient3,myRecipe.strIngredient4,myRecipe.strIngredient5,myRecipe.strIngredient6,myRecipe.strIngredient7,myRecipe.strIngredient8,myRecipe.strIngredient9,myRecipe.strIngredient10,myRecipe.strIngredient11,myRecipe.strIngredient12,myRecipe.strIngredient13,myRecipe.strIngredient14,myRecipe.strIngredient15,myRecipe.strIngredient16,myRecipe.strIngredient17,myRecipe.strIngredient18,myRecipe.strIngredient19,myRecipe.strIngredient20]
      const meas = [myRecipe.strMeasure1,myRecipe.strMeasure2,myRecipe.strMeasure3,myRecipe.strMeasure4,myRecipe.strMeasure5,myRecipe.strMeasure6,myRecipe.strMeasure7,myRecipe.strMeasure8,myRecipe.strMeasure9,myRecipe.strMeasure10,myRecipe.strMeasure11,myRecipe.strMeasure12,myRecipe.strMeasure13,myRecipe.strMeasure14,myRecipe.strMeasure15,myRecipe.strMeasure16,myRecipe.strMeasure17,myRecipe.strMeasure18,myRecipe.strMeasure19,myRecipe.strMeasure20]
      const ingredient = ingr.filter(elem => elem.length > 0)
      const measures = meas.filter(elem => elem.length > 1)
      recipe = true;
      mealDetails.innerHTML = `<button class="recipe__btn" onclick="toggleRecipe()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg></button>
        <div class="content__wrapper">
          <h2 class="recipe__title">${myRecipe.strMeal}</h2>
          <p class="recipe__category">${myRecipe.strCategory}</p>
          <div class="recipe__meal--img">
            <img src="${myRecipe.strMealThumb}">
          </div>
          <div class="ingredient__wrapper">
            <div class="ingredient">
              <h3>Ingredients:</h3>
              <p>${ingredient.join(', ')}</p>
            </div>
            <div class="measures">
              <h3>Measures:</h3>
              <p>${measures.join(', ')}</p>
            </div>
          </div>
          <div class="recipe__instruction">
            <h3>Instructions:</h3>
            <p>${myRecipe.strInstructions}</p>
          </div>
          <div class="recipe__link">
          <a href="${myRecipe.strYoutube}" target="_blank">Watch Youtube Video ⏵</a>
          <a href="${myRecipe.strSource}" target="_blank">Food Source</a>
          </div>
          </div>`
        });
}
function toggleRecipe() {
  if (recipeOpen) {
    recipeOpen = false;
    document.body.classList.remove("disableScroll");
    mealDetails.innerHTML = ''
    return mealDetails.classList.remove("openRecipe");
  }
  recipeOpen = true;
  mealDetails.classList += " openRecipe";
  document.body.classList += "disableScroll";
}
