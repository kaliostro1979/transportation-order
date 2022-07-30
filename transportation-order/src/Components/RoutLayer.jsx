import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

export default function RoutingLayer({ waypoints }) {
    const map = useMap();

    useEffect(() => {
        const start = waypoints[0]
        const end = waypoints[1]

        console.log(start)

        if (!map) return;
        const routingControl = L.Routing.control({
            waypoints: [L.latLng(start[0], start[1]), L.latLng(end[0], end[1])],
            routeWhileDragging: true
        }).addTo(map);

        return () => map.removeControl(routingControl);
    }, [map, waypoints]);

    return null;
}