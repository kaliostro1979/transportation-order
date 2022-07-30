import {combineReducers} from "@reduxjs/toolkit";
import {locationsReducer} from "./reducers/locations";
import {wayPointsReducer} from "./reducers/wayPoints";
import {resetStateReducer} from "./reducers/reset";


export const rootReducer = combineReducers({
    locations: locationsReducer,
    wayPoints: wayPointsReducer,
    reset: resetStateReducer
})
