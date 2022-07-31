import {SET_LOCATION_END, SET_LOCATION_START} from "../types";


export const setLocationStart = (location, row)=>{

    return {
        type: SET_LOCATION_START,
        payload: {location, row}
    }
}

export const setLocationEnd = (location, row)=>{
    return {
        type: SET_LOCATION_END,
        payload:  {location, row}
    }
}
