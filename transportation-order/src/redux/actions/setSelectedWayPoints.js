import {SET_SELECTED_WAYPOINTS_ARRAY} from "../types";

export const setSelectedWaypointsAction = (item)=>{

    return {
        type: SET_SELECTED_WAYPOINTS_ARRAY,
        payload: item
    }
}
