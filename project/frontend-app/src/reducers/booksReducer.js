import {SEARCH_TEXT} from "../constants/constants";

const initialState = '';

export default function filterBooks(state = initialState, action){
    switch(action.type){
        case SEARCH_TEXT:
            return action.text;
        default:
            return state;
    }
}