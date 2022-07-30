import React, {useCallback, useEffect, useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from "leaflet";
import RoutingLayer from "./RoutLayer";


function Map() {

    const waypoints = [[40.22045006203592, 44.48813299026871], [40.184657214445146, 44.50572828077749]]

    const setWaypoints = useCallback(()=>{
        let temp = []
        for (let i = 0; i < waypoints?.length; i++) {
            temp.push(L.latLng(waypoints[i][0], waypoints[i][1]))
        }
        return temp;
    }, [waypoints])

    useEffect(()=>{
        setWaypoints()
    }, [setWaypoints])

    return (
        <MapContainer center={[40.18224302384448, 44.509310010546734]} zoom={13} scrolWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <RoutingLayer waypoints={waypoints ? waypoints : null} />
        </MapContainer>
    )
}

export default Map