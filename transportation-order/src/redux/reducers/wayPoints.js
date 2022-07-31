import {SET_LOCATION_START, SET_LOCATION_END} from "../types";

const initialState = {}

export const wayPointsReducer = (state = initialState, action)=>{
    switch (action.type){
        case SET_LOCATION_START:
            return [{...state, start: action.payload}]
        case SET_LOCATION_END:
            return [{...state, end: action.payload}]
        default:
            return state
    }
}
