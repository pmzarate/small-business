import { combineReducers } from 'redux'
//import cookie from 'cookie'

const user = (state = [], action) => {
    switch(action.type) {
        case "LOGGED_IN":
            return { 
                ...action.value,
                loggedIn: true,
            }
        case "LOGGED_OUT":
            return {
                ...state,
                user: null,
                loggedIn: false,
            }
            default:
                return user
    }
}

const businesses = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BUSINESS':
            // const newBusiness= state[state.length - 1]
            // action.value.id = newBusiness.id + 1
            return [ ...state, action.value ]
        case 'REMOVE_BUSINESS':
            const businesses = [ ...state ]
            businesses.splice(action.value, 1)
            return businesses
        default:
            return state
    }
}

// const fetchMap = (state = [], action) => {
//     switch(action.type) {
//         case 'FETCH_MAP':
//             return action.value
//         default:
//             return state
//     }
// }

export default combineReducers({ user, businesses })