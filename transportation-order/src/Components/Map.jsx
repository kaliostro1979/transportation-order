import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

const Map = () => {
    return (
        <MapContainer center={[40.18236495944804, 44.51957956228818]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=fYE9pure4dgnDl2i8r4g"
            />
        </MapContainer>
    );
};

export default Map;