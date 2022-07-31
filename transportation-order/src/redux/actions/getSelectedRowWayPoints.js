import {GET_SELECTED_ROW_WAYPOINTS} from "../types";

export const getSelectedRowWaypointsAction = (page, row, waypoints)=>{
    return {
        type: GET_SELECTED_ROW_WAYPOINTS,
        payload:/* waypoints.filter(waypoint=>waypoint.page === page && waypoint.row === row)*/ []
    }
}
