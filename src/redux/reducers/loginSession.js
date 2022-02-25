import { LOGIN, LOGOUT } from '../actions/loginSession'

const initialState = {
    userSession: {
        username: "default",
        password: null
    },
    isLoggedIn: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                userSession: action.payload,
                isLoggedIn: true
            }
        case LOGOUT:
            return state
        default:
            return state
    }
}