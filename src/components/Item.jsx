import React, { Component } from "react";
import { Link } from "react-router-dom";

class Item extends Component {
  state = {
    activeRecipe: [],
    isLoading: false,
    error: false,
  };
  componentDidMount() {
    const title = this.props.location.state.recipe;
    this.setState({ isLoading: true });
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ activeRecipe: response.meals, isLoading: false });
        // console.log(this.state.activeRecipe);
      })
      .catch((error) => this.setState({ error: true,isLoading:false }));
  }

  render() {
    // console.log(this.state.error);
    const recipe = this.state.activeRecipe.map((item) => (
      <div className="item" key={item.idMeal}>
        <div className="item-image">
          <img src={item.strMealThumb} alt={item.strMeal} />
        </div>
        <div className="content">
          <h1>{item.strMeal}</h1>
          <h2>Category : {item.strCategory}</h2>
          <h2>Meal Area: {item.strArea}</h2>
          {item.strYoutube === null || item.strYoutube === "" ? (
            ""
          ) : (
            <button className="btn btn-danger mr-2 btn-sm">
              <a href={item.strYoutube} target="_blank">
                Youtube
              </a>
            </button>
          )}
          {item.strSource === null || item.strSource === "" ? (
            ""
          ) : (
            <button className="btn btn-info m-2 btn-sm">
              <a href={item.strSource} target="_blank">
                Source
              </a>
            </button>
          )}
          <button className="btn btn-warning m-2 btn-sm">
            <Link to="/">Go back</Link>
          </button>
          <div className="ingredients">
            <h3>Ingredients</h3>
            <ul>
              {item.strMeasure1 === "" ||
              item.strMeasure1 === null ||
              item.strIngredient1 === "" ||
              item.strIngredient1 === null ? (
                ""
              ) : (
                <li>
                  {item.strMeasure1} {item.strIngredient1}
                </li>
              )}
              {item.strMeasure2 === "" ||
              item.strMeasure2 === null ||
              item.strIngredient2 === "" ||
              item.strIngredient2 === null ? (
                ""
              ) : (
                <li>
                  {item.strMeasure2} {item.strIngredient2}
                </li>
              )}
              {item.strMeasure3 === "" ||
              item.strMeasure3 === null ||
              item.strIngredient3 === "" ||
              item.strIngredient3 === null ? (
                ""
              ) : (
                <li>
                  {item.strMeasure3} {item.strIngredient3}
                </li>
              )}
              {item.strMeasure4 === "" ||
              item.strMeasure4 === null ||
              item.strIngredient4 === "" ||
              item.strIngredient4 === null ? (
                ""
              ) : (
                <li>
                  {item.strMeasure4} {item.strIngredient4}
                </li>
              )}
              {item.strMeasure5 === "" ||
              item.strMeasure5 === null ||
              item.strIngredient5 === "" ||
              item.strIngredient5 === null ? (
                ""
              ) : (
                <li>
                  {item.strMeasure5} {item.strIngredient5}
                </li>
              )}
              {item.strMeasure6 === "" ||
              item.strMeasure6 === null ||
              item.strIngredient6 === "" ||
              item.strIngredient6 === null ? (
                ""
              ) : (
                <li>
                  {item.strMeasure6} {item.strIngredient6}
                </li>
              )}
              {item.strMeasure7 === "" ||
              item.strMeasure7 === null ||
              item.strIngredient7 === "" ||
              item.strIngredient7 === null ? (
                ""
              ) : (
                <li>
                  {item.strMeasure7} {item.strIngredient7}
                </li>
              )}
              {item.strMeasure8 === "" ||
              item.strMeasure8 === null ||
              item.strIngredient8 === "" ||
              item.strIngredient8 === null ? (
                ""
              ) : (
                <li>
                  {item.strMeasure8} {item.strIngredient8}
                </li>
              )}
              {item.strMeasure9 === "" ||
              item.strMeasure9 === null ||
              item.strIngredient9 === "" ||
              item.strIngredient9 === null ? (
                ""
              ) : (
                <li>
                  {item.strMeasure9} {item.strIngredient9}
                </li>
              )}
              {item.strMeasure10 === "" ||
              item.strMeasure10 === null ||
              item.strIngredient10 === "" ||
              item.strIngredient10 === null ? (
                ""
              ) : (
                <li>
                  {item.strMeasure10} {item.strIngredient10}
                </li>
              )}
              {item.strMeasure11 === "" ||
              item.strMeasure11 === null ||
              item.strIngredient11 === "" ||
              item.strIngredient11 === null ? (
                ""
              ) : (
                <li>
                  {item.strMeasure11} {item.strIngredient11}
                </li>
              )}
              {item.strMeasure12 === "" ||
              item.strMeasure12 === null ||
              item.strIngredient12 === "" ||
              item.strIngredient12 === null ? (
                ""
              ) : (
                <li>
                  {item.strMeasure12} {item.strIngredient12}
                </li>
              )}
              {item.strMeasure13 === "" ||
              item.strMeasure13 === null ||
              item.strIngredient13 === "" ||
              item.strIngredient13 === null ? (
                ""
              ) : (
                <li>
                  {item.strMeasure13} {item.strIngredient13}
                </li>
              )}
              {item.strMeasure14 === "" ||
              item.strMeasure14 === null ||
              item.strIngredient14 === "" ||
              item.strIngredient14 === null ? (
                ""
              ) : (
                <li>
                  {item.strMeasure14} {item.strIngredient14}
                </li>
              )}
              {item.strMeasure15 === "" ||
              item.strMeasure15 === null ||
              item.strIngredient15 === "" ||
              item.strIngredient15 === null ? (
                ""
              ) : (
                <li>
                  {item.strMeasure15} {item.strIngredient15}
                </li>
              )}
              {item.strMeasure16 === "" ||
              item.strMeasure16 === null ||
              item.strIngredient16 === "" ||
              item.strIngredient16 === null ? (
                ""
              ) : (
                <li>
                  {item.strMeasure16} {item.strIngredient16}
                </li>
              )}
              {item.strMeasure17 === "" ||
              item.strMeasure17 === null ||
              item.strIngredient17 === "" ||
              item.strIngredient17 === null ? (
                ""
              ) : (
                <li>
                  {item.strMeasure17} {item.strIngredient17}
                </li>
              )}
              {item.strMeasure18 === "" ||
              item.strMeasure18 === null ||
              item.strIngredient18 === "" ||
              item.strIngredient18 === null ? (
                ""
              ) : (
                <li>
                  {item.strMeasure18} {item.strIngredient18}
                </li>
              )}
              {item.strMeasure19 === "" ||
              item.strMeasure19 === null ||
              item.strIngredient19 === "" ||
              item.strIngredient19 === null ? (
                ""
              ) : (
                <li>
                  {item.strMeasure19} {item.strIngredient19}
                </li>
              )}
              {item.strMeasure20 === "" ||
              item.strMeasure20 === null ||
              item.strIngredient20 === "" ||
              item.strIngredient20 === null ? (
                ""
              ) : (
                <li>
                  {item.strMeasure20} {item.strIngredient20}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="instruction">
          <span>{item.strInstructions}</span>
        </div>
      </div>
    ));
    return (
      <div>
        {this.state.isLoading ? (
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : this.state.error ? (
          <div class="bar error">
            &#9747; Network ERROR
          </div>
        ) : (
          recipe
        )}
      </div>
    );
  }
}

export default Item;
