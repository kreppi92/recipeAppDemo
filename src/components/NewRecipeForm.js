import React, { Fragment } from 'react';
import { func } from 'prop-types';
import NewRecipeInput from './NewRecipeInput';
import { displayRecipes } from '../types';
import NewRecipeInputDisplay from './NewRecipeInputDisplay';

const arrayOfElements = ["description", "ingredients", "steps"]


const uppercaseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const NewRecipeForm = ({ displayRecipes, onSaveClick, onChange }) => (
  <div>
    <h2>Add New Recipe</h2>
    <table>
      <tbody>
        {arrayOfElements.map((element, index) => {
          return (
            <Fragment key={index}>
              <tr>
                <td><label htmlFor={element}>{uppercaseFirstLetter(element)}</label></td>
                <td><NewRecipeInput onChange={onChange} name={element} value={displayRecipes.displayRecipe[element]} onSaveClick={onSaveClick} />
                </td>
              </tr>
              <tr>
                <td>
                  <NewRecipeInputDisplay name={element} arrayOfItems={displayRecipes.newRecipeObject[element]} />
                </td>
              </tr>
            </Fragment>
          )
        })}
        {/* <tr>
          <td><label htmlFor="ingredients">Ingredients</label></td>
          <td><NewRecipeInput onChange={onChange} name="ingredients" value={displayRecipes.displayRecipe.ingredients} onSaveClick={onSaveClick}/>
          </td>
        </tr>
        <tr>
          <td><label htmlFor="steps">Steps</label></td>
          <td><NewRecipeInput onChange={onChange} name="steps" value={displayRecipes.displayRecipe.steps} onSaveClick={onSaveClick}/>
          </td>
        </tr> */}
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