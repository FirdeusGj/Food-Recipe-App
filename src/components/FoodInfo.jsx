import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function FoodInfo() {
  const { id } = useParams();
  const [food, setFood] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    const fetchFood = async () => {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      let meal = data.meals[0];
      setFood(meal);
      const extractedIngredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && measure) {
          extractedIngredients.push({ ingredient, measure });
        } else {
          break;
        }
      }
      setIngredients(extractedIngredients);
    };
    fetchFood();
  }, [id]);
  return (
    <div>
      <Link to="/food">back to search
      </Link>
      <img src={food.strMealThumb} height={100} alt="" />
      <h1>{food.strMeal}</h1>
      <p>{food.strInstructions}</p>
      {ingredients.map((elem) => (
        <p>
          {elem.ingredient}, {elem.measure}
        </p>
      ))}
      {food.strYoutube !== "" ? (
        <a href={food.strYoutube} target="_blank" rel="noreferrer">Youtube link</a>
      ) : (
        <p>No youtube link available</p>
      )}
    </div>
  );
}
