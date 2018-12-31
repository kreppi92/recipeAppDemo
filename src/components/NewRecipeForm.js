import React, { Fragment } from 'react';
import { func } from 'prop-types';
import NewRecipeInput from './NewRecipeInput';
import { displayRecipes } from '../types';
import NewRecipeInputDisplay from './NewRecipeInputDisplay';

const arrayOfElements = ["title", "description", "ingredients", "steps"]

const uppercaseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const NewRecipeForm = ({ displayRecipes, onSaveClick, onChange, onDelete }) => (
  <div>
    <h2>Add New Recipe</h2>
    <table>
      <tbody>
        {arrayOfElements.map((element, index) => {
          return (
            <Fragment key={index}>
              <tr>
                <td><h4><label htmlFor={element}>{uppercaseFirstLetter(element)}</label></h4></td>
              </tr>
              <tr>
                <td><NewRecipeInput onChange={onChange} name={element} value={displayRecipes.displayRecipe[element]} onSaveClick={onSaveClick} />
                </td>
              </tr>
              <tr>
                <td>
                  <NewRecipeInputDisplay name={element} arrayOfItems={displayRecipes.newRecipeObject[element]} onDelete={onDelete} />
                </td>
              </tr>
            </Fragment>
          )
        })}
        <tr>
          <td><label>Date Modified</label></td>
          <td>{displayRecipes.displayRecipe.dateModified}</td>
        </tr>
      </tbody>
    </table>

    <hr />
  </div>
);

NewRecipeForm.propTypes = {
  onSaveClick: func.isRequired,
  onChange: func.isRequired,
  displayRecipes: displayRecipes.isRequired
};

export default NewRecipeForm;