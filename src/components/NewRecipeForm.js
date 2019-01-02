import React, { Fragment } from 'react';
import { func } from 'prop-types';
import NewRecipeInput from './NewRecipeInput';
import { displayRecipes } from '../types';
import NewRecipeInputDisplay from './NewRecipeInputDisplay';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';

const arrayOfElements = ["description", "ingredients", "steps"]

const uppercaseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const NewRecipeForm = ({displayRecipes, onSaveClick, onChange, onDelete, onSaveRecipe, clearRecipe}) => 
    (
    <div>
      <h2>Recipe Creation Form</h2>
      <table>
        <tbody>
          {arrayOfElements.map((element, index) => {
            return (
              <Fragment key={index}>
                <tr>
                  <td><NewRecipeInput onChange={onChange} name={element} value={displayRecipes.displayRecipe[element]} onSaveClick={onSaveClick} uppercase={uppercaseFirstLetter} />
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
            <td>{displayRecipes.newRecipeObject.dateModified}</td>
          </tr>
        </tbody>
      </table>

      <hr />
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button onClick={e => onSaveRecipe(e)} size="medium" variant="contained" color="secondary">
          SAVE
        <SaveIcon />
        </Button>
      </Link>
      <Button onClick={e => clearRecipe(e)} size="medium" variant="contained" >
        CLEAR
        <ClearIcon/>
    </Button>
    </div>
    );

NewRecipeForm.propTypes = {
  onSaveClick: func.isRequired,
  onChange: func.isRequired,
  onSaveRecipe: func.isRequired,
  clearRecipe: func.isRequired,
  displayRecipes: displayRecipes.isRequired
}

export default NewRecipeForm;