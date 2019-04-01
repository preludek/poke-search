import fetch from 'node-fetch';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const INPUT_SEARCH = 'INPUT_SEARCH';
export const RANDOM_SEARCH = 'RANDOM_SEARCH';


const API = "http://pokeapi.co/api/v2/pokemon/";

export const searchSuccess = results => ({ type: SEARCH_SUCCESS, results });

export const searchError = errors => ({ type: SEARCH_ERROR, errors });

export const inputPass = () => {
    return {
        type: INPUT_SEARCH,
    }
}

export const inputSearch = (inputValue) => {
    return dispatch => {
        fetch(API + `${inputValue}`)
            .then(res => res.json())
            .then(data => { return dispatch(searchSuccess(data)) })
            .catch(err => {
                return dispatch(searchError(`Either this pokemon doesn't exist or the API died :(`))
            })
    }
}

export const randomSearch = (randomValue) => {
    return dispatch => {
        fetch(API + `${randomValue}`)
            .then(res => res.json())
            .then(data => { return dispatch(searchSuccess(data)) })
            .catch(err => {
                return dispatch(searchError(`Something went wrong`))
            })
    }
}
