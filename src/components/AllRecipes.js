import React, { Fragment } from 'react';
import SingleRecipe from './SingleRecipe.js'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from '@material-ui/core/Grid';
import * as actions from '../actions/newRecipeAction';

export class AllRecipes extends React.Component {


  deleteRecipeHandler = (e, index) => {
    e.preventDefault()
    this.props.actions.deleteRecipe(index)
  }

  editRecipeHandler = (e, index) => {
    this.props.actions.editRecipe(index)
  }

  expandViewHandler = (e, index) => {
    e.preventDefault()
    this.props.actions.expandView(index)
  }

  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <h1>RECIPE INDEX</h1>
        </Grid>
        {this.props.displayRecipes.loadedRecipes.length > 0 ?
          this.props.displayRecipes.loadedRecipes.map((singleRecipe, index) =>
            <Grid item xs={12} sm={6} key={singleRecipe.id}>
              <SingleRecipe
                recipe={singleRecipe}
                key={singleRecipe.id}
                recipeIndex={index}
                deleteRecipe={this.deleteRecipeHandler}
                editRecipe={this.editRecipeHandler}
                expandedView={this.props.displayRecipes.expandedView}
                handleExpandView={this.expandViewHandler}
                classes={this.props.classes}
                />
            </Grid>
          )
          :
          (<Fragment>
            <p>{"NO RECIPES AVAILABLE"}</p>
            <p>{"Consider deleting your local storage to see the initial state."}</p>
          </Fragment>)}
      </Grid>
    );
  }
}

AllRecipes.propTypes = {
  actions: PropTypes.object.isRequired,
  displayRecipes: PropTypes.object.isRequired,
  classes: PropTypes.object
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
