import axios from '../../axios-movies'
import * as actionTypes from './actionTypes'
import * as keys from '../../Keys'

export const initMovies = () => {
    return {
        type: 'INIT_MOVIES'
    }    
}

export const updateSearch = (search) => {
    return {
        type: actionTypes,
        searchUrl: search
    }
}

export const setData = (data, mounted) => {
    return {
        type: actionTypes.SET_CONTENT,
        contentData: data,
        mounted: mounted
    }
}

export const fetchDataFailed = (error) => {
    return {
        type: actionTypes.FETCH_DATA_FAILED,
        error: error
    }
}

export const loadContent = (payload) => {
    return dispatch => {
        axios.get(payload.url + '&api_key=' + keys.api_key)
            .then(response => {
                dispatch(setData(response.data.results, payload.mounted))
            })
            .catch(error => {
                dispatch(fetchDataFailed(error))
            })
    }
}
