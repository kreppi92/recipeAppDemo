// Centralized propType definitions
import { shape, number, string, oneOfType } from 'prop-types';

export const displayRecipes = shape({
  description: oneOfType([number,string]),
  ingredients: oneOfType([number,string]),
  steps: oneOfType([number,string]),
  dateModified: string,
});