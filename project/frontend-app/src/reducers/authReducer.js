import {SET_CURRENT_USER} from "../constants/constants";
import isEmpty from '../helpers/validation/is-empty'

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
}