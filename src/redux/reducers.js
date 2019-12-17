import { combineReducers } from 'redux'

const user = (state = null) => state

const businessListing = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BUSINESS':
            return [ ...state, action.value ]
        case 'REMOVE_BUSINESS':
            const businessListing = [ ...state ]
            businessListing.splice(action.value, 1)
            return businessListing
        default:
            return state
    }
}

const fetchMap = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_MAP':
            return action.value
        default:
            return state
    }
}

export default combineReducers({ user, businessListing, fetchMap })