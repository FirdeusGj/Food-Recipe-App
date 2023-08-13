import React, { useState } from "react";
import "./FoodSearch.css";
import Nav from "./Nav";
import axios from "axios";
import { Link } from "react-router-dom";
import noFood from "./assets/undraw_breakfast_psiw.svg";
export default function FoodSearch() {
  const [searchQuery, setSearchQuery] = useState(""); // Store the search query
  const [searchFood, setSearchFood] = useState([]);
  const [availableFood, setAvailableFood] = useState(true);
  const [loading, setLoading] = useState(false);
  const searchEnter = (e) => {
    if (e.key === "Enter") {
      fetchFood();
    }
  };
  async function fetchFood() {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      if (data.meals) {
        setAvailableFood(true);
        setSearchFood(data.meals);
      } else {
        setSearchFood([]);
        setAvailableFood(false);
        console.log("no food");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  }
  return (
    <div className="search">
      <Nav />
      <div className="search__wrapper">
        <div className="search__input--wrapper">
          <div className="select__input--wrapper">
            <div className="search__div">
              <div className="search__label">
                <label>Food search</label>
              </div>
              <div className="search__input">
                <input
                  placeholder="Search"
                  onChange={(event) => setSearchQuery(event.target.value)} // Update search query, not searchFood
                  onKeyUp={searchEnter}
                  type="text"
                />
                <button onClick={fetchFood}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                  </svg>
                </button>
              </div>
              <div className="random__link">
                <Link
                  to={`/food/${
                    Math.floor(Math.random() * (53075 - 52775 + 1)) + 52775
                  }`}
                >
                  Choose Random
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="search__food--wrapper">
          {loading ? (
            <div className="loading__wrapper">
              <div className="loading"></div>
              <div className="loading"></div>
              <div className="loading"></div>
              <div className="loading"></div>
              <div className="loading"></div>
              <div className="loading"></div>
              <div className="loading"></div>
              <div className="loading"></div>
            </div>
          ) : availableFood ? (
            searchFood.map((elem) => (
              <Link to={`/food/${elem.idMeal}`} className="search__food--link">
                <div key={elem.idMeal} className="search__food">
                  <h1>{elem.strMeal}</h1>
                  <h2>{elem.strCategory}</h2>
                  <img src={elem.strMealThumb} height={100} alt="food" />
                </div>
              </Link>
            ))
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <h1 style={{ color: "white" }}>Sorry, Food Not Available</h1>
              <img src={noFood} style={{ width: "500px", maxWidth: "95%" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
