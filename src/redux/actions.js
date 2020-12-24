//////////////////////////////
// Actions are functions that are invoked to pass the right action to dispatch
//////////////////////////////

//IMPORT ACTION TYPES
const {ADD, SUB} = require('./actionTypes')


export const add = (payload) => {
    return {
        type: ADD,
        payload
    }
}

export const sub = (payload) => {
    return {
        type: SUB,
        payload
    }
}