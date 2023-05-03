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
function recipeDetail(id) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json())
    .then((data) => {
      let myRecipe = data.meals[0];
      console.log(myRecipe);
      mealDetails.innerHTML = `<button class="recipe__btn" onclick="toggleRecipe()">x</button>
          <h2 class="recipe__title">${myRecipe.strMeal}</h2>
          <p class="recipe__category">${myRecipe.strCategory}</p>
          <div class="recipe__meal--img">
            <img src="${myRecipe.strMealThumb}">
          </div>
          <div class="recipe__instruction">
            <h3>Instructions:</h3>
            <p>${myRecipe.strInstructions}</p>
          </div>
          <div class="recipe__link">
            <a href="${myRecipe.strYoutube}" target="_blank">Watch Video ⏵</a>
            <a href="${myRecipe.strSource}" target="_blank">Food Source</a>
          </div>`
    });
}
function toggleRecipe() {
  if (recipeOpen) {
    recipeOpen = false;
    document.body.classList.remove("disableScroll");
    return mealDetails.classList.remove("openRecipe");
  }
  recipeOpen = true;
  mealDetails.classList += " openRecipe";
  document.body.classList += "disableScroll";
}
