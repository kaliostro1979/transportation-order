import {combineReducers} from "@reduxjs/toolkit";
import {locationsReducer} from "./reducers/locations";
import {wayPointsReducer} from "./reducers/wayPoints";
import {resetStateReducer} from "./reducers/reset";
import {selectedRowReducer} from "./reducers/selectedRow";


export const rootReducer = combineReducers({
    locations: locationsReducer,
    wayPoints: wayPointsReducer,
    reset: resetStateReducer,
    selectedRow: selectedRowReducer
})
