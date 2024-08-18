import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const GeoLocationMap = () => {
  // Example coordinates for the marker (latitude, longitude)
  const redFlagPosition = [51.505, -0.09]; // Example for red-flag
  const interventionPosition = [51.515, -0.1]; // Example for intervention

  return (
    <MapContainer center={redFlagPosition} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marker for red-flag */}
      <Marker position={redFlagPosition}>
        <Popup>
          Red-Flag Location
        </Popup>
      </Marker>
      {/* Marker for intervention */}
      <Marker position={interventionPosition}>
        <Popup>
          Intervention Location
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default GeoLocationMap;