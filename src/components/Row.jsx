import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
import "./Row.css";
import { Link } from "react-router-dom";
export default function Row({ title, fetchUrl }) {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setFoods(request.data.meals);
      console.log(request.data.meals);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="foods">
        <div className="foods-slide">
          {foods.map((food) => (
            <Link to="/food">
            <img
              className="row__img"
              src={food.strMealThumb}
              key={food.idMeal}
            />
            </Link>
          ))}
        </div>
        <div className="foods-slide">
          {foods.map((food) => (
            <Link to="/food">
              <img
                className="row__img"
                src={food.strMealThumb}
                key={food.idMeal}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
