import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/newRecipeAction';
import NewRecipeForm from '../NewRecipeForm';

export class NewRecipePage extends React.Component {

    saveNewRecipeHandler = e => {
        console.log("Calling saveNewRecipe function within NewRecipePage.js")
        this.props.actions.saveNewRecipe(this.props.newRecipe, e.target.name, e.target.value);
    }

    render() {
        return (
            <NewRecipeForm
                onSaveClick={this.saveNewRecipe}
                onChange={this.saveNewRecipeHandler}
                newRecipe={this.props.newRecipe}
            />
        );
    }
}

NewRecipePage.propTypes = {
    actions: PropTypes.object.isRequired,
    newRecipe: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        newRecipe: state.newRecipe
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
