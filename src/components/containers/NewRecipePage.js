import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/newRecipeAction';
import NewRecipeForm from '../NewRecipeForm';

export class NewRecipePage extends React.Component {

    saveNewRecipeHandler = e => {
        console.log("Calling saveNewRecipe function within NewRecipePage.js")
        this.props.actions.saveNewRecipe(this.props.displayRecipes, e.target.name, e.target.value);
    }

    addItemToListHandler = e => {
        e.preventDefault()
        this.props.actions.addItemToList(this.props.displayRecipes)
    }

    render() {
        return (
            <NewRecipeForm
                onSaveClick={this.addItemToListHandler}
                onChange={this.saveNewRecipeHandler}
                displayRecipes={this.props.displayRecipes}
            />
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
