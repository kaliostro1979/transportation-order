import {GET_LOCATIONS} from "../types";

const initialState = []

export const locationsReducer = (state = initialState, action)=>{
    switch (action.type){
        case GET_LOCATIONS:
            return action.payload
        default:
            return state
    }
}
