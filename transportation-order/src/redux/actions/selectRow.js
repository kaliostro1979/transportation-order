import {SELECT_ROW} from "../types";


export const selectRowAction = (index)=>{
    return {
        type: SELECT_ROW,
        payload: index
    }
}
