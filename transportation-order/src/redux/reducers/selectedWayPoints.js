import {SET_SELECTED_WAYPOINTS_ARRAY} from "../types";

const initialState = []

export const selectedWaypointsReducer = (state = initialState, action)=>{
    switch (action.type){
        case SET_SELECTED_WAYPOINTS_ARRAY:
            return [...state, action.payload]
        default:
            return state
    }
}
