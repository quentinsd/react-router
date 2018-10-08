import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import History from "./History";
import Product from "./Product";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink exact to="/">
            {" "}
            Accueil{" "}
          </NavLink>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
            to="/notre-histoire"
          >
            {" "}
            History{" "}
          </NavLink>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notre-histoire" component={History} />
            <Route path="/produit-:productNumber(\d+)" component={Product} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
