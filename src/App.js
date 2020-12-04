import React from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Item from "./components/Item";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/recipe/:id" component={Item} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
