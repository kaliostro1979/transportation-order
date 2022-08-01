import {GET_SELECTED_ROW_WAYPOINTS} from "../types";

export const getSelectedRowWaypoints = (waypoints, row)=>{
    const [waypoint] = waypoints.filter(item=> parseInt(item.row) === parseInt(row))

    return {
        type: GET_SELECTED_ROW_WAYPOINTS,
        payload: waypoint || {}
    }
}
