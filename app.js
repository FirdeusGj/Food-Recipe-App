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
    let MyIngredients = [meal.strIngredient1, meal.strIngredient2]
    meal.map(elem => {
      MyIngredients = [elem.strIngredient1, elem.strIngredient2, elem.strIngredient3,elem.strIngredient4,elem.strIngredient5,elem.strIngredient6,elem.strIngredient7,elem.strIngredient8,elem.strIngredient9,elem.strIngredient10,elem.strIngredient11,elem.strIngredient12,elem.strIngredient13,elem.strIngredient14,elem.strIngredient15,elem.strIngredient16,elem.strIngredient17,elem.strIngredient18,elem.strIngredient19,elem.strIngredient20]
    })
    const Ingredients = MyIngredients.filter(filtered)
    function filtered(ingr){
      return ingr.length > 0 
    }
    console.log(Ingredients)
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
            <p>${elem.strMeal}</p>
            <p>Area : ${elem.strArea}</p>
            </div>
                <div>
                <h3>Ingredients :</h3>
                <div class='ingredients__wrapper'>
                    <span>${Ingredients.join(', ')}</span>
                </div>
                </div>
                <div>
                    <p>${elem.strInstructions}</p>
                </div>
                <div>
                    <a href="${elem.strYoutube}" target="_blank">Youtube Video</a>
                    <a href="${elem.strSource}" target="_blank">Food Source</a>
                </div>
                <div>
                    <button> 
                    View more ⮟
                    </button>
                </div>
            </li>`
        )
        .join("");
    });
}
