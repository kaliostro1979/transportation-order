import {SET_LOCATION_START, SET_LOCATION_END} from "../types";

const initialState = []

export const wayPointsReducer = (state = initialState, action)=>{
    switch (action.type){
        case SET_LOCATION_START:{
            let newState = [ ...state ];
            newState =
                [ newState[0], action.payload];
            return newState
        }
        case SET_LOCATION_END:{
            let newState = [ ...state ];
            newState =
                [ newState[1], action.payload];
            return newState
        }
        default:
            return state
    }
}
