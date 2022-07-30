import {RESET_STATE} from "../types";

const initialState = []

export const resetStateReducer = (state = initialState, action)=>{
    switch (action.type){
        case RESET_STATE:
            return initialState
        default:
            return state
    }
}
