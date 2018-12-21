import * as types from '../constants/actionTypes';
import {getFormattedDateTime} from '../utils/dates';

export function saveNewRecipe(settings, fieldName, value) {
  console.log("calling newRecipeAction.js")
    return {
      type: types.ADD_NEW_RECIPE,
      payload: {
        dateModified: getFormattedDateTime(),
        settings,
        fieldName,
        value
      }
    };
  }