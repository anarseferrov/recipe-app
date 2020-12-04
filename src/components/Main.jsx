import React, { Component } from "react";
import CardItems from "./CardItems";
import Header from "./Header";

class Main extends Component {
  response;
  state = {
    query: "",
    error: false,
    isLoading: false,
    search: []
  };

  searchRecipe = (e) => {
    this.setState({ isLoading: true });
    const { query } = this.state;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((response) => {
        if (this.state.search === null) {
          this.setState({ error: true });
        } else {
          this.setState({ search: response.meals });
          // console.log(response);
          localStorage.setItem("resultData", JSON.stringify(response.meals));
        }
        this.setState({ isLoading: false });
      })
      .catch((error) => console.log(error));

    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({
      query: e.target.value,
    });
    if (this.state.search === null) {
      this.setState({ search: [] });
    }
  };

  componentDidMount() {
    localStorage.getItem("resultData") &&
      this.setState({
        search: JSON.parse(localStorage.getItem("resultData")),
      });
  }

  render() {
    // console.log(this.state.search)
    return (
      <div className="containerx">
        <Header
          handleChange={this.handleChange}
          searchRecipe={this.searchRecipe}
        />
        {this.state.search === null ? (
          <p className="notfound">Result not found </p>
        ) : this.state.isLoading ? (
          <div className="lds-facebook"><div></div><div></div><div></div></div>
        ) : (
            <CardItems searchResult={this.state} />
        )}
      </div>
    );
  }
}

export default Main;
