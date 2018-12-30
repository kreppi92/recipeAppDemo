import {ADD_NEW_RECIPE, ADD_ITEM_TO_LIST} from '../constants/actionTypes';
import initialState from './initialState';
import objectAssign from 'object-assign';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function newRecipeReducer(state = initialState.displayRecipes, action) {
  let newState;
  newState = objectAssign({}, state)

  switch (action.type) {
    // case ADD_NEW_RECIPE:
    // console.log("calling reducer")
    //   // For this example, just simulating a save by changing date modified.
    //   // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
    //   return objectAssign({}, state, {dateModified: action.dateModified});

    case ADD_NEW_RECIPE:
    console.log("Calling newRecipeReducer.js")
      newState.displayRecipe[action.payload.fieldName] = action.payload.value;
    //   newState.necessaryDataIsProvidedToCalculateSavings = necessaryDataIsProvidedToCalculateSavings(newState);
      newState.displayRecipe.dateModified = action.payload.dateModified;
    //   if (newState.necessaryDataIsProvidedToCalculateSavings) {
    //     newState.savings = calculateSavings(newState);
    //   }
      return newState;

    case ADD_ITEM_TO_LIST:
    console.log("Calling ADD_ITEM_TO_LIST")
    newState.newRecipeObject[action.payload.fieldName].push(newState.displayRecipe[action.payload.fieldName])
    newState.displayRecipe[action.payload.fieldName] = ""

    return newState;

    default:
      return state;
  }
}
