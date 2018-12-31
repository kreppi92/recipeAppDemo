// Centralized propType definitions
import { shape, number, string, oneOfType } from 'prop-types';

export const displayRecipes = shape({
  title: oneOfType([number,string]),
  description: oneOfType([number,string]),
  ingredients: oneOfType([number,string]),
  steps: oneOfType([number,string]),
  dateModified: string,
});