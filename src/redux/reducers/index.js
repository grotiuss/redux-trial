import { combineReducers } from "redux";

import persons from './person.js'
import loginSession from './loginSession.js'

export default combineReducers({
    persons,
    loginSession
})