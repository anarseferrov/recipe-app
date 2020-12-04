import React, { Component } from "react";
import { Link } from "react-router-dom";

class CardItems extends Component {
  render() {
    const items = this.props.searchResult.search.map((item) => (
      <div className="card-item" key={item.idMeal}>
        <div className="image-container">
          <img src={item.strMealThumb} alt={item.strMeal} />
        </div>
        <div className="meal-name">
          <p>{item.strMeal}</p>
        </div>
        <button className="search-button">
          <Link
            to={{
              pathname: `/recipe/${item.idMeal}`,
              state: { recipe: item.strMeal },
            }}
          >
            View Recipe
          </Link>
        </button>
      </div>
    ));
    return <div className="card-container container">{items}</div>;
  }
}

export default CardItems;
