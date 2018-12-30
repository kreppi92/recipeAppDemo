// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import displayRecipes from './newRecipeReducer';

 const rootReducer = combineReducers({
    displayRecipes
 })

 export default rootReducer;