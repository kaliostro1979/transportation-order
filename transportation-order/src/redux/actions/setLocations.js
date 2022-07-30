import {SET_LOCATION_END, SET_LOCATION_START} from "../types";


export const setLocationStart = (location)=>{
    return {
        type: SET_LOCATION_START,
        payload: location
    }
}

export const setLocationEnd = (location)=>{
    return {
        type: SET_LOCATION_END,
        payload: location
    }
}
