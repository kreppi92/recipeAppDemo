import * as types from '../constants/actionTypes';
import { getFormattedDateTime } from '../utils/dates';

export function saveNewRecipe(settings, fieldName, value) {
    console.log("calling newRecipeAction.js")
    return {
        type: types.ADD_NEW_RECIPE,
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