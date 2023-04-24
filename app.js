
const ul = document.querySelector('.meal__ul')
const input = document.querySelector('input')

input.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        search()
    }
})
let inputText = ''

function inputChange(event){
    inputText = event.target.value
}
function search(){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
          .then((response) => response.json())
          .then((data) => {
            let meal = data.meals
            if(!meal || inputText === ''){
                ul.innerHTML = `<h1>No meals available</h1>`;
                return
            }
            ul.innerHTML = meal.map(elem => `
            <li class="meal__li">
            <img src="${elem.strMealThumb}"/>
                <p>${elem.strMeal}</p>
                <p>Area : ${elem.strArea}</p>
                <h3>Ingredient :</h3>
                <ul>
                    <li>${elem.strInstructions}</li>
                </ul>
            </li>`).join('')
            console.log(meal)
        })
}