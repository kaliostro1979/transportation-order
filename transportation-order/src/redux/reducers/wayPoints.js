import {SET_LOCATION_START, SET_LOCATION_END, RESET_STATE, GET_SELECTED_ROW_WAYPOINTS} from "../types";

const initialState = {
    row: null,
    start: null,
    end: null
}

export const wayPointsReducer = (state = initialState, action)=>{
    switch (action.type){
        case SET_LOCATION_START:
            return {...state, row: action.payload.row, start: action.payload.location}
        case SET_LOCATION_END:
            return {...state, row: action.payload.row, end: action.payload.location}
        case GET_SELECTED_ROW_WAYPOINTS:
            return action.payload
        case RESET_STATE:
            return initialState
        default:
            return state
    }
}
