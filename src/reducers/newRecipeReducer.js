import { ADD_NEW_RECIPE, ADD_ITEM_TO_LIST, REMOVE_ITEM_FROM_LIST } from '../constants/actionTypes';
import initialState from './initialState';
import objectAssign from 'object-assign';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function newRecipeReducer(state = initialState.displayRecipes, action) {
  let newState;

  switch (action.type) {
    // case ADD_NEW_RECIPE:
    // console.log("calling reducer")
    //   // For this example, just simulating a save by changing date modified.
    //   // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
    //   return objectAssign({}, state, {dateModified: action.dateModified});

    case ADD_NEW_RECIPE:
      newState = objectAssign({}, state, {
        displayRecipe: {
          ...state.displayRecipe,
          [action.payload.fieldName]: action.payload.value,
          dateModified: action.payload.dateModified
        }
      });
      console.log("Calling newRecipeReducer.js")
      //   newState.necessaryDataIsProvidedToCalculateSavings = necessaryDataIsProvidedToCalculateSavings(newState);
      //   if (newState.necessaryDataIsProvidedToCalculateSavings) {
      //     newState.savings = calculateSavings(newState);
      //   }
      return newState;

    case ADD_ITEM_TO_LIST:
      if (action.payload.fieldName === "description" || action.payload.fieldName === "title") {
        newState = objectAssign({}, state, {
          displayRecipe: {
            ...state.displayRecipe,
            [action.payload.fieldName]: ""
          },
          newRecipeObject: {
            ...state.newRecipeObject,
            [action.payload.fieldName]: [state.displayRecipe[action.payload.fieldName]]
          }
        })
      } else {
        newState = objectAssign({}, state, {
          displayRecipe: {
            ...state.displayRecipe,
            [action.payload.fieldName]: ""
          },
          newRecipeObject: {
            ...state.newRecipeObject,
            [action.payload.fieldName]: [
              ...state.newRecipeObject[action.payload.fieldName],
              state.displayRecipe[action.payload.fieldName]
            ]
          }
        })
      }
      console.log("Calling ADD_ITEM_TO_LIST")

      return newState;

    case REMOVE_ITEM_FROM_LIST:
      console.log("Calling REMOVE_ITEM_FROM_LIST")

      newState = objectAssign({}, state, {
        newRecipeObject: {
          ...state.newRecipeObject,
          [action.payload.fieldName]: [
            ...state.newRecipeObject[action.payload.fieldName].slice(0, action.payload.index),
            ...state.newRecipeObject[action.payload.fieldName].slice(action.payload.index + 1)
          ]
        }
      })
      return newState;

    default:
      return state;
  }
}
