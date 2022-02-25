import { ADD, INIT, PUSH } from '../actions/person.js'

const initialState = [
    {
        id: 1,
        name: 'Ryan Gosling',
        address: 'Jakarta',
        phoneNumber: '123123',
        photo: 'Ryan Gosling.png'
    }
]

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD:
            return [...state, action.payload]
        case INIT:
            return action.payload
        case PUSH:
            return 'ladida'
        default:
            return state
    }
}