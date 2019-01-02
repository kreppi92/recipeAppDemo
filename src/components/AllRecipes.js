import React, { Fragment } from 'react';
import SingleRecipe from './SingleRecipe.js'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/newRecipeAction';

export class AllRecipes extends React.Component {


  deleteRecipeHandler = (e, index) => {
    e.preventDefault()
    this.props.actions.deleteRecipe(index)
  }

  editRecipeHandler = (e, index) => {
    this.props.actions.editRecipe(index)
  }

  render() {
    return (
      <Fragment>
        <h1>RECIPE INDEX</h1>
        {this.props.displayRecipes.loadedRecipes.length > 0 ?
            this.props.displayRecipes.loadedRecipes.map((singleRecipe, index) =>
            
              <SingleRecipe 
              recipe={singleRecipe} 
              key={index} 
              recipeIndex={index} 
              deleteRecipe={this.deleteRecipeHandler}
              editRecipe={this.editRecipeHandler}/>
            )
      :
      (<Fragment>
        <p>{"NO RECIPES AVAILABLE"}</p>
        <p>{"Consider deleting your local storage to see the initial state."}</p>
      </Fragment>)}
    </Fragment>
    );
  };
}

AllRecipes.propTypes = {
  actions: PropTypes.object.isRequired,
  displayRecipes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    displayRecipes: state.displayRecipes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllRecipes);
