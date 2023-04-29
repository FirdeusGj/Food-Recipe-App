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
            <p>${elem.strMeal}</p>
            <p>Area : ${elem.strArea}</p>
            </div>
                <div>
                <h3>Ingredients :</h3>
                <div>
                    <span>${elem.strIngredient1}</span>
                    <span>${elem.strIngredient2}</span>
                    <span>${elem.strIngredient3}</span>
                    <span>${elem.strIngredient4}</span>
                    <span>${elem.strIngredient5}</span>
                    <span>${elem.strIngredient6}</span>
                    <span>${elem.strIngredient7}</span>
                    <span>${elem.strIngredient8}</span>
                    <span>${elem.strIngredient9}</span>
                    <span>${elem.strIngredient10}</span>
                    <span>${elem.strIngredient11}</span>
                    <span>${elem.strIngredient12}</span>
                    <span>${elem.strIngredient13}</span>
                    <span>${elem.strIngredient14}</span>
                    <span>${elem.strIngredient15}</span>
                    <span>${elem.strIngredient16}</span>
                    <span>${elem.strIngredient17}</span>
                    <span>${elem.strIngredient18}</span>
                    <span>${elem.strIngredient19}</span>
                    <span>${elem.strIngredient20}</span>
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
      console.log(meal);
    });
}
