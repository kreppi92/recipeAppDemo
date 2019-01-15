import { CONTROL_INPUT, ADD_ITEM_TO_LIST, REMOVE_ITEM_FROM_LIST, ADD_RECIPE, LOAD_RECIPES, DELETE_RECIPE, EDIT_RECIPE, CLEAR_RECIPE, EXPAND_VIEW } from '../constants/actionTypes';
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

    case CONTROL_INPUT:
      newState = objectAssign({}, state, {
        displayRecipe: {
          ...state.displayRecipe,
          [action.payload.fieldName]: action.payload.value,
          dateModified: action.payload.dateModified
        }
      });
      return newState;

    case ADD_ITEM_TO_LIST:
      if (action.payload.fieldName === "description" || action.payload.fieldName === "image") {
        newState = objectAssign({}, state, {
          displayRecipe: {
            ...state.displayRecipe,
            [action.payload.fieldName]: "",
            dateModified: action.payload.dateModified
          },
          newRecipeObject: {
            ...state.newRecipeObject,
            [action.payload.fieldName]: [state.displayRecipe[action.payload.fieldName]],
            dateModified: action.payload.dateModified
          }
        })
      } else {
        newState = objectAssign({}, state, {
          displayRecipe: {
            ...state.displayRecipe,
            [action.payload.fieldName]: "",
            dateModified: action.payload.dateModified
          },
          newRecipeObject: {
            ...state.newRecipeObject,
            [action.payload.fieldName]: [
              ...state.newRecipeObject[action.payload.fieldName],
              state.displayRecipe[action.payload.fieldName],
            ],
            dateModified: action.payload.dateModified
          }
        })
      }

      return newState;

    case REMOVE_ITEM_FROM_LIST:

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

    case ADD_RECIPE:
      newState = objectAssign({}, state, {
        newRecipeObject: {
          description: [],
          ingredients: [],
          steps: [],
          image: [],
        },
        loadedRecipes: [
          ...state.loadedRecipes,
          {
            ...state.newRecipeObject,
            id: action.payload.id
          }
        ]
      }
      )
      return newState;

    case LOAD_RECIPES:
      newState = objectAssign({}, state, {
        loadedRecipes: [
          ...action.payload.arrayOfRecipes,
        ]
      }
      )

      return newState;

    case DELETE_RECIPE:
      newState = objectAssign({}, state, {
        loadedRecipes: [
          ...state.loadedRecipes.slice(0, action.payload.index),
          ...state.loadedRecipes.slice(action.payload.index + 1)
        ]
      }
      )

      return newState

    case EDIT_RECIPE:
      newState = objectAssign({}, state, {
        newRecipeObject: {
          ...state.loadedRecipes[action.payload.index]
        },
        loadedRecipes: [
          ...state.loadedRecipes.slice(0, action.payload.index),
          ...state.loadedRecipes.slice(action.payload.index + 1)
        ]
      },
      )

      return newState

    case CLEAR_RECIPE:
      newState = objectAssign({}, state, {
        newRecipeObject: {
          description: [],
          ingredients: [],
          steps: [],
          image: [],
          dateModified: "",
        },
      }
      )

      return newState

    case EXPAND_VIEW:
      if (action.payload.index === state.expandedView) {
        newState = objectAssign({}, state, {
          expandedView: ""
        }
        )
      } else {
        newState = objectAssign({}, state, {
          expandedView: action.payload.index
        }
        )
      }

      return newState

    default:
      return state;
  }
}
