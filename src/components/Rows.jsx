import React from "react";
import Row from "./Row";
import requests from "../Requests";
import "./Rows.css";
export default function Rows() {
  return (
    <div className="rows">
      <div className="rows__text">
        <h1>Browse your favourite category</h1>
      </div>
      <Row title="Beef" fetchUrl={requests.fetchBeef} />
      <Row title="Chicken" fetchUrl={requests.fetchChicken} />
      <Row title="Desserts" fetchUrl={requests.fetchDessert} />
      <Row title="Pasta" fetchUrl={requests.fetchPasta} />
      <Row title="Pork" fetchUrl={requests.fetchPork} />
      <Row title="Seafood" fetchUrl={requests.fetchSeafood} />
      <Row title="Vegetarian" fetchUrl={requests.fetchVegetarian} />
      <Row title="Miscellaneous" fetchUrl={requests.fetchMiscellaneous} />
    </div>
  );
}
