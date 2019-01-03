import * as types from '../constants/actionTypes';
import { getFormattedDateTime } from '../utils/dates';

export function saveNewRecipe(settings, fieldName, value) {
    return {
        type: types.CONTROL_INPUT,
        payload: {
            dateModified: getFormattedDateTime(),
            settings,
            fieldName,
            value
        }
    };
}

export function addItemToList(settings, fieldName) {
    return function (dispatch) {
        // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
        // in this case at this point we could call a service that would persist the fuel savings
        return dispatch({
            type: types.ADD_ITEM_TO_LIST,
            payload: {
                dateModified: getFormattedDateTime(),
                settings,
                fieldName
            }
        });
    };
}

export function removeItemFromList(fieldName, index) {
    return function (dispatch) {
        return dispatch({
            type: types.REMOVE_ITEM_FROM_LIST,
            payload: {
                fieldName,
                index
            }
        })
    }
}

export function addRecipeToRecipeArray() {
    return function (dispatch) {
        return dispatch({
            type: types.ADD_RECIPE,
            payload: {
            }
        })
    }
}

export function loadRecipes(arrayOfRecipes) {
    return function (dispatch) {
        return dispatch({
            type: types.LOAD_RECIPES,
            payload: {
                arrayOfRecipes
            }
        })
    }
}

export function deleteRecipe(index) {
    return function (dispatch) {
        return dispatch({
            type: types.DELETE_RECIPE,
            payload: {
                index
            }
        })
    }
}

export function editRecipe(index) {
    return function (dispatch) {
        return dispatch({
            type: types.EDIT_RECIPE,
            payload: {
                index
            }
        })
    }
}

export function clearRecipe(index) {

    return function (dispatch) {
        return dispatch({
            type: types.CLEAR_RECIPE,
            payload: {
                index
            }
        })
    }
}

export function expandView(index) {

    return function (dispatch) {
        return dispatch({
            type: types.EXPAND_VIEW,
            payload: {
                index
            }
        })
    }
}