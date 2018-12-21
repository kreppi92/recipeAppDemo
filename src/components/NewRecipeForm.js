import React from 'react';
import {func} from 'prop-types';
import NewRecipeInput from './NewRecipeInput';
import {newRecipe} from '../types';

const NewRecipeForm = ({newRecipe, onSaveClick, onChange}) => (
  <div>
    <h2>Add New Recipe</h2>
    <table>
      <tbody>
        <tr>
          <td><label htmlFor="description">Description</label></td>
          <td><NewRecipeInput onChange={onChange} name="description" value={newRecipe.description}/>
          </td>
        </tr>
        <tr>
          <td><label htmlFor="ingredients">Ingredients</label></td>
          <td><NewRecipeInput onChange={onChange} name="ingredients" value={newRecipe.ingredients}/>
          </td>
        </tr>
        <tr>
          <td><label htmlFor="steps">Steps</label></td>
          <td><NewRecipeInput onChange={onChange} name="steps" value={newRecipe.steps}/>
          </td>
        </tr>
        <tr>
          <td><label>Date Modified</label></td>
          <td>{newRecipe.dateModified}</td>
        </tr>
      </tbody>
    </table>

    <hr/>
  </div>
);

NewRecipeForm.propTypes = {
  // onSaveClick: func.isRequired,
  onChange: func.isRequired,
  newRecipe: newRecipe.isRequired
};

export default NewRecipeForm;