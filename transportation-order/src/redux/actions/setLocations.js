import {SET_LOCATION_END, SET_LOCATION_START} from "../types";


export const setLocationStart = (location, page, row)=>{
    return {
        type: SET_LOCATION_START,
        payload: {location, page, row}
    }
}

export const setLocationEnd = (location, page, row)=>{
    return {
        type: SET_LOCATION_END,
        payload:  {location, page, row}
    }
}
