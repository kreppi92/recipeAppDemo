// Centralized propType definitions
import { shape, number, bool, string, oneOfType } from 'prop-types';

export const newRecipe = shape({
  description: oneOfType([number,string]),
  ingredient: oneOfType([number,string]),
  step: oneOfType([number,string]),
  displayResult: bool,
  dateModified: string,
});