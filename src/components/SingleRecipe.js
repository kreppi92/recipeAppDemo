import React from 'react';
import PropTypes from 'prop-types';

const SingleRecipe = ({ recipe }) => {
    return (
        <div>
            <h2>{recipe.title}</h2>
            <h5>Date modified {recipe.date}</h5>
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
