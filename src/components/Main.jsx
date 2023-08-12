import React from "react";
import "./Main.css";
import Rows from "./Rows";
import Nav from "./Nav";

export default function Main() {
  return (
    <>
    <Nav/>
    <div className="main">
      <div className="main__body">
        <div className="main__text">
          <h1>Foodify</h1>
          <h3>Where every <span className="stroke">bite</span> tells a story.</h3>
          <h5>
            <span className="stroke">Your</span> premier Food Search
            Engine in which you <br/>can discover the recipes you crave,
            <br/><span className="stroke">Effortlessly</span>
          </h5>
        </div>
      </div>
    </div>
    <Rows/>
    </>
  );
}
