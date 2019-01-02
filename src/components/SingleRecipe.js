import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleRecipe = ({ recipe, recipeIndex, deleteRecipe, editRecipe }) => {
    return (
        <div>
            <h2>{recipe.description}</h2>
            <input type="submit" value="DELETE" onClick={(e) => deleteRecipe(e, recipeIndex)} name={name}/>
            <Link to="/NewRecipe"><input type="submit" value="EDIT" onClick={(e)=>editRecipe(e, recipeIndex)} name={name}/></Link>
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
