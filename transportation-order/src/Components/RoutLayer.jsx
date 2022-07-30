import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

export default function RoutingLayer({wayPoint}) {
    const map = useMap();

    useEffect(() => {
        const start = wayPoint.length && wayPoint[0]
        const end = wayPoint.length && wayPoint[1]

        if (!map) return;
        const routingControl = L.Routing.control({
            waypoints: [L.latLng(start), L.latLng(end)],
            routeWhileDragging: true
        }).addTo(map);

        return () => map.removeControl(routingControl);
    }, [map, wayPoint]);

    return null;
}
