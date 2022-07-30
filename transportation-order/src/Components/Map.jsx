import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import RoutingLayer from "./RoutLayer";
import {useSelector} from "react-redux";


function Map() {
    const wayPoint = useSelector(state => state.wayPoints)
    console.log(wayPoint);
    return (
        <MapContainer center={[39.0646, -105.3272]} zoom={13} scrolWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <RoutingLayer wayPoint={wayPoint}/>
        </MapContainer>
    )
}

export default Map
