import React, { useState } from 'react';
import { MapContainer, TileLayer, ZoomControl, CircleMarker, Popup } from 'react-leaflet';
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';
import styles from './ReportsMapSection.module.css';

// Coordinates for Kenyan towns 
const heatmapData = [
  // Very High (Red)
  { lat: -1.2921, lng: 36.8219, intensity: 150 }, // Nairobi
  { lat: -4.0435, lng: 39.6682, intensity: 130 }, // Mombasa
  { lat: 0.0236, lng: 37.9062, intensity: 140 }, // Nyeri
  
  // High (Orange/Yellow)
  { lat: -0.1022, lng: 34.7617, intensity: 90 },  // Kisumu
  { lat: -0.3031, lng: 36.0800, intensity: 75 },  // Nakuru
  { lat: -1.5200, lng: 37.2700, intensity: 85 },  // Machakos
  
  // Medium (Green)
  { lat: 0.5143, lng: 35.2698, intensity: 40 },   // Eldoret
  { lat: -0.7151, lng: 36.4290, intensity: 30 },  // Thika
  { lat: -3.2333, lng: 40.1167, intensity: 35 },  // Malindi
  
  // Low (Blue)
  { lat: 3.1167, lng: 35.6000, intensity: 8 },    // Lodwar
  { lat: -1.0396, lng: 37.0900, intensity: 5 },   // Embu
  { lat: -4.1763, lng: 39.4456, intensity: 3 },   // Diani Beach
];

const ReportsMapSection = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (report) => {
    setSelectedMarker(report);
  };

  const getColor = (intensity) => {
    if (intensity > 100) return '#ff0000'; // Red
    if (intensity > 70) return '#ffa500';  // Orange
    if (intensity > 20) return '#00ff00';  // Green
    return '#0000ff';                      // Blue
  };

  const getRadius = (intensity) => {
    return Math.min(Math.max(intensity / 3, 5), 25); // Minimum radius of 5, maximum of 25
  };

  return (
    <section className={styles.interactiveMapSection}>
      <h2 className={styles.interactiveMapTitle}>Your Community, Your Voice</h2>
      <p className={styles.interactiveMapSubtitle}>
        Explore reports in your area and see the impact we're making together.
      </p>

      <div className={styles.mapContainer}>
        <MapContainer 
          center={[-1.2921, 36.8219]} // Centered on Nairobi
          zoom={7} 
          className={styles.map}
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          
          <MarkerClusterGroup>
            {heatmapData.map((point, index) => (
              <CircleMarker 
                key={index}
                center={[point.lat, point.lng]}
                radius={getRadius(point.intensity)}
                fillColor={getColor(point.intensity)}
                color={getColor(point.intensity)}
                weight={1}
                opacity={0.8}
                fillOpacity={0.6}
                eventHandlers={{
                  click: () => handleMarkerClick(point),
                }}
              >
                <Popup className={styles.popup}>
                  <h3>Report Density</h3>
                  <p>Location: {point.lat.toFixed(4)}, {point.lng.toFixed(4)}</p>
                  <p>Intensity: {point.intensity}</p>
                </Popup>
              </CircleMarker>
            ))}
          </MarkerClusterGroup>

          <ZoomControl position="topright" />
        </MapContainer>
      </div>

      <div className={styles.legend}>
        <h4>Report Density</h4>
        <div className={styles.legendItem}>
          <span className={`${styles.legendColor} ${styles.blueLegend}`}></span>
          Low (0-20)
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.legendColor} ${styles.greenLegend}`}></span>
          Medium (21-70)
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.legendColor} ${styles.orangeLegend}`}></span>
          High (71-100)
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.legendColor} ${styles.redLegend}`}></span>
          Very High (100+)
        </div>
      </div>

      <div className={styles.callToAction}>
        <button className={styles.reportNowButton}>Add Your Voice - Report Now</button>
      </div>

      <div className={styles.additionalInfo}>
        <p>This map represents aggregated data from user reports. Individual report locations are approximated to protect user privacy.</p>
        <p>Can't find your area? Zoom out to explore different regions.</p>
      </div>
    </section>
  );
};

export default ReportsMapSection;