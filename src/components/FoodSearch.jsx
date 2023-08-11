import React, { useState } from "react";
import "./FoodSearch.css";
import Nav from "./Nav";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FoodSearch() {
  const [searchQuery, setSearchQuery] = useState(""); // Store the search query
  const [searchFood, setSearchFood] = useState([]);

  const searchEnter = (e) => {
    if (e.key === "Enter") {
      fetchFood();
    }
  };

  async function fetchFood() {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );

      if (data.meals) {
        setSearchFood(data.meals);
        }
       else {
        setSearchFood([]);
        console.log("no food");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  return (
    <div className="search">
      <Nav />
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <div>
        <label>Food search</label>
        <div>
          <input
            onChange={(event) => setSearchQuery(event.target.value)} // Update search query, not searchFood
            onKeyUp={searchEnter}
            type="text"
          />
          <button>Search</button>
          <Link to={`/food/${Math.floor(Math.random() * (53075 - 52775 + 1)) + 52775}`}>Random</Link>
        </div>
      </div>
      {searchFood.map((elem) => (
        <Link to={`/food/${elem.idMeal}`}>
        <div key={elem.idMeal}>
          <h1>{elem.strMeal}</h1>
          <h2>{elem.strCategory}</h2>
          <img src={elem.strMealThumb} height={100} alt="food"/>
        </div>
        </Link>
      ))}
    </div>
  );
}
