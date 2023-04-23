
const ul = document.querySelector('.ul')
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
            if(!meal){
                ul.innerHTML = `<h1>No meals available</h1>`;
                return
            }
            ul.innerHTML = meal.map(elem => `
            <li>
                <p>${elem.strMeal}</p>
            </li>`).join('')
        })
}