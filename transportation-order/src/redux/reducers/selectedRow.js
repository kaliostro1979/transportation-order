import {SELECT_ROW} from "../types";

const initialState = 0

export const selectedRowReducer = (state = initialState, action)=>{
    switch (action.type){
        case SELECT_ROW:
            return action.payload
        default:
            return state
    }
}
