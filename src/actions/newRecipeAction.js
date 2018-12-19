import * as types from '../constants/actionTypes';
import {getFormattedDateTime} from '../utils/dates';

export function calculateFuelSavings(description, ingredients, steps) {
    return {
      type: types.ADD_NEW_RECIPE,
      dateModified: getFormattedDateTime(),
      description,
      ingredients,
      steps
    };
  }