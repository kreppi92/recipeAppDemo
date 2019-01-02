import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const SingleRecipe = ({ recipe, recipeIndex, deleteRecipe, editRecipe }) => {
    return (
        <div>
            <h2>{recipe.description}
            <Link to="/NewRecipe">
                <IconButton aria-label="Edit">
                    <EditIcon onClick={(e) => editRecipe(e, recipeIndex)} />
                </IconButton>
            </Link>
            <IconButton aria-label="Delete">
                <DeleteIcon onClick={(e) => deleteRecipe(e, recipeIndex)} />
            </IconButton></h2>
            <h5>Date modified {recipe.dateModified}</h5>
            <h4>Description: </h4>
            <p>{recipe.description}</p>
            <h4>Ingredients: </h4>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient}
                    </li>
                ))}
            </ul>
            <h4>Steps: </h4>
            <ul>
                {recipe.steps.map((step, index) => (
                    <li key={index}>
                        {step}
                    </li>
                ))}
            </ul>
        </div>
    )
}

SingleRecipe.propTypes = {
    recipe: PropTypes.object.isRequired
};

export default SingleRecipe;
