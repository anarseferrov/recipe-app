import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#" data-abc="true">
          Recipe App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active"></li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search recipe"
              onChange={this.props.handleChange}
            />
            <button
              className="btn btn-secondary my-2 my-sm-0"
              type="submit"
              onClick={this.props.searchRecipe}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Header;
