import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/newRecipeAction';
import NewRecipeForm from '../NewRecipeForm';

export class NewRecipePage extends React.Component {

    saveNewRecipeHandler = e => {
        this.props.actions.saveNewRecipe(this.props.displayRecipes, e.target.name, e.target.value);
    }

    addItemToListHandler = e => {
        e.preventDefault()
        this.props.actions.addItemToList(this.props.displayRecipes, e.target.name)
    }

    deleteItemHandler = (e, index) => {
        e.preventDefault()
        this.props.actions.removeItemFromList(e.target.name, index)
    }

    saveRecipeHandler = e => {
        e.preventDefault()
        this.props.actions.addRecipeToRecipeArray()
    }

    render() {
        return (
            <Fragment>
                <h1>NEW RECIPE</h1>
                <NewRecipeForm
                    onSaveClick={this.addItemToListHandler}
                    onChange={this.saveNewRecipeHandler}
                    onDelete={this.deleteItemHandler}
                    displayRecipes={this.props.displayRecipes}
                    onSaveRecipe={this.saveRecipeHandler}
                />
            </Fragment>

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
