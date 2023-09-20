import React, { Component } from "react";
import logo from "../../assets/logo.png";
import "./Home.css";
import Card from "../Card/Card";

let allMeals = [];



async function generateMeals() {
  for (let i = 0; i < 24; i++) {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );

    let data = await response.json();
    allMeals[i] = data;
  }
  return allMeals;
}

await generateMeals();
// console.log(data);

export default class Home extends Component {
  render() {
    return (
      <div className="home py-2">
        <div className="container ">
          <div className="row gy-1">
            {allMeals.map(function (meal, index) {
              return <Card meals={meal} key={index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
