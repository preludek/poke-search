import * as actionTypes from './actions'

const initialState = {
    searchResults: [],
    historySearches: [],
    errors: [],
}


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.SEARCH_SUCCESS:
            const updatedHistory = state.historySearches
            updatedHistory.unshift(action.results)
            return {
                ...state,
                errors: [],
                historySearches: updatedHistory,
                searchResults: action.results,
            }

        case actionTypes.SEARCH_ERROR:
            return {
                ...state,
                searchResults: [],
                errors: action.errors,
            }

        case actionTypes.INPUT_CHANGE:
            return {
                ...state,
                errors: [],
            }

        case actionTypes.INPUT_SEARCH:
            return {


            }

        default:
            return state
    }
};

export default reducer
