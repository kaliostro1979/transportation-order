import {GET_SELECTED_ROW_WAYPOINTS} from "../types";

const initialState = []

export const selectedRowWaypointsReducer = (state = initialState, action)=>{
    switch (action.type){
        case GET_SELECTED_ROW_WAYPOINTS:
            return action.payload
        default:
            return state
    }
}
