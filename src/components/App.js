/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

import AllRecipes from "./AllRecipes";

class App extends React.Component {
    render() {
        const activeStyle = { color: 'blue' };
        return (
            <div>
                <div>
                    <NavLink exact to="/" activeStyle={activeStyle}>All Recipes</NavLink>
                    {" | "}
                    <NavLink exact to="/NewRecipe">New Recipe</NavLink>
                </div>
                <Switch>
                    <Route exact path="/" component={AllRecipes} />
                </Switch>
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default hot(module)(App)