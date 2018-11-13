import * as actionTypes from '../actions/actionTypes'

const initialState = {
    searchUrl: "",
    contentData: null,
    mounted: false,
    error: false
}

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

const setContent = (state, action) => {
    return updateObject( state, {
        contentData: action.contentData,
        mounted: action.mounted
    })
}

const fetchDataFailed = (state, action) => {
    return updateObject(state, {error: action.error})
}

const updateSearch = (state, action) => {
    return updateObject(state, {searchUrl: action.searchUrl})
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_CONTENT:
            return setContent(state, action);
        case actionTypes.FETCH_DATA_FAILED:
            return fetchDataFailed(state, action);
        case actionTypes.UPDATE_SEARCH:
            return updateSearch(state, action);
        default:
            return state;
    }
}

export default reducer;