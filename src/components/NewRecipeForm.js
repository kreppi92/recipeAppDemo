import React from 'react';
import {func} from 'prop-types';
import NewRecipeInput from './NewRecipeInput';
import {displayRecipes} from '../types';

const NewRecipeForm = ({displayRecipes, onSaveClick, onChange}) => (
  <div>
    <h2>Add New Recipe</h2>
    <table>
      <tbody>
        <tr>
          <td><label htmlFor="description">Description</label></td>
          <td><NewRecipeInput onChange={onChange} name="description" value={displayRecipes.displayRecipe.description} onSaveClick={onSaveClick}/>
          </td>
        </tr>
        <tr>
          <td><label htmlFor="ingredients">Ingredients</label></td>
          <td><NewRecipeInput onChange={onChange} name="ingredients" value={displayRecipes.displayRecipe.ingredients} onSaveClick={onSaveClick}/>
          </td>
        </tr>
        <tr>
          <td><label htmlFor="steps">Steps</label></td>
          <td><NewRecipeInput onChange={onChange} name="steps" value={displayRecipes.displayRecipe.steps} onSaveClick={onSaveClick}/>
          </td>
        </tr>
        <tr>
          <td><label>Date Modified</label></td>
          <td>{displayRecipes.displayRecipe.dateModified}</td>
        </tr>
      </tbody>
    </table>

    <hr/>
  </div>
);

NewRecipeForm.propTypes = {
  onSaveClick: func.isRequired,
  onChange: func.isRequired,
  displayRecipes: displayRecipes.isRequired
};

export default NewRecipeForm;