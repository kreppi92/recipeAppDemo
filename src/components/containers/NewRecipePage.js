import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/newRecipeAction';
import NewRecipeForm from '../NewRecipeForm';
import Grid from '@material-ui/core/Grid'

export class NewRecipePage extends React.Component {

    saveNewRecipeHandler = e => {
        this.props.actions.saveNewRecipe(this.props.displayRecipes, e.target.name, e.target.value);
    }

    addItemToListHandler = (e, name) => {
        e.preventDefault()
        this.props.actions.addItemToList(this.props.displayRecipes, name)
    }

    deleteItemHandler = (e, name, index) => {
        e.preventDefault()
        this.props.actions.removeItemFromList(name, index)
    }

    saveRecipeHandler = () => {
        this.props.actions.addRecipeToRecipeArray()
    }

    clearRecipeHandler = e => {
        e.preventDefault()
        this.props.actions.clearRecipe()
    }

    render() {
        return (
            <Grid container spacing={16}>
                <Grid item xs={12} sm={12}>
                    <h1>NEW RECIPE</h1>
                    <NewRecipeForm
                        onSaveClick={this.addItemToListHandler}
                        onChange={this.saveNewRecipeHandler}
                        onDelete={this.deleteItemHandler}
                        displayRecipes={this.props.displayRecipes}
                        onSaveRecipe={this.saveRecipeHandler}
                        clearRecipe={this.clearRecipeHandler}
                    />
                </Grid>
            </Grid>
        );
    }
}

NewRecipePage.propTypes = {
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
)(NewRecipePage);
