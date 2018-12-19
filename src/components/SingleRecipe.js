import React from 'react';
import PropTypes from 'prop-types';

const SingleRecipe = ({ recipe }) => {
    return (
        <div>
            <h2>{recipe.description}</h2>
            <h5>Added {recipe.date}</h5>
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
