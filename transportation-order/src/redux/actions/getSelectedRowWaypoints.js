import {GET_SELECTED_ROW_WAYPOINTS} from "../types";

export const getSelectedRowWaypoints = (waypoints, row)=>{

    return {
        type: GET_SELECTED_ROW_WAYPOINTS,
        payload: waypoints.filter(item=> parseInt(item.row) === parseInt(row))[0] || {}
    }
}
