import {SET_ALERT, REMOVE_ALERT, CLEAR_ERRORS} from "../types";

export default (state, action) => {
    switch (action.type) {
        case SET_ALERT:
            return [...state, action.payload];
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== action.payload);
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        default:
            return state
    }
}
