import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <figure className="nav__img">
      <Link to="/" className="nav__link">
        <img
        className="logo"
          src="https://icons-for-free.com/iconfiles/png/512/meal-1320568026248944827.png"
          alt=""
          />
      </Link>
          </figure>
      <div className="nav__links">
        <Link className="link" to="/food">
          <h1>Search</h1>
        </Link>
        <Link className="link" to="/">
          <h1>Home</h1>
        </Link>
      </div>
    </div>
  );
}
