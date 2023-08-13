import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "./Nav";
import "./FoodInfo.css";

export default function FoodInfo() {
  const { id } = useParams();
  const [food, setFood] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        if (data.meals && data.meals.length > 0) {
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
          setLoading(false);
        } else {
          setLoading(false);
          console.log("No meal data found.");
        }
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };

    fetchFood();
  }, [id]);
  const youtubeLink = () => {
    alert("Link Not Available");
  };
  let math = Math.floor(Math.random() * (53075 - 52775 + 1)) + 52775;
  const randomLink =
    math !== 0 ? (
      <Link to={`/food/${math}`}>Random</Link>
    ) : (
      <p>Random generation failed.</p>
    );
  return (
    <div className="foodInfo">
      <Nav />
      <div className="foodInfo__wrapper">
        {loading ? (
          <div className="loadingInfo__wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>
          </div>
        ) : (
          <>
            <div className="foodInfo__img">
              <label>{food.strCategory}</label>
              <img src={food.strMealThumb} alt="" />
              <div className="foodInfo__link">
                {food.strYoutube !== "" ? (
                  <a
                    className="foodInfo__youtube"
                    href={food.strYoutube}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Youtube{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 640 512"
                    >
                      <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                    </svg>
                  </a>
                ) : (
                  <a
                    className="foodInfo__youtube"
                    style={{ cursor: "pointer" }}
                    href={false}
                    onClick={youtubeLink}
                    rel="noreferrer"
                  >
                    Youtube{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 640 512"
                    >
                      <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                    </svg>
                  </a>
                )}
                <Link to="/food">Search</Link>
                {randomLink}
              </div>
            </div>
            <div className="foodInfo__text">
              <h1>{food.strMeal}</h1>
              <div className="foodInfo__ingredients">
                <div>
                  {ingredients.map((elem) => (
                    <p>
                      {elem.ingredient} - {elem.measure}
                    </p>
                  ))}
                </div>
              </div>
              <p>{food.strInstructions}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
