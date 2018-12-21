// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import newRecipe from './newRecipeReducer';

 const rootReducer = combineReducers({
    newRecipe
 })

 export default rootReducer;