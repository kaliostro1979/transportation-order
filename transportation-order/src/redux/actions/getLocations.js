import locations from '../../locations.json'
import {GET_LOCATIONS} from "../types";

export const getLocationsAction = ()=>{
    return {
        type: GET_LOCATIONS,
        payload: locations && locations.map(data=>{
            return  {...data, name: data.state, key: data.state, geo: [data.latitude, data.longitude]}
        })
    }
}
