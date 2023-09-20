import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    let data = this.props.meals;
    console.log(data);

    return (
      <>
        <div className="col-md-3">
          <div className="rounded-1 border border-2 shadow-lg card">
            <img src={data.meals[0].strMealThumb} className="w-100" alt="" />
            <div className="layer">
              <p className="meal-text">{data.meals[0].strMeal}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
