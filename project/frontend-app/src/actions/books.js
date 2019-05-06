import {SEARCH_TEXT} from "../constants/constants";

export const searchText = (text) => {
    return {
        type: SEARCH_TEXT,
        text
    }
}