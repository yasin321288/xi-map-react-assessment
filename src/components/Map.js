// src/Map.js

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline,Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from './Navbar'; // Import the Navbar component
import VehiclePopup from './VehiclePopup';

// Car icon configuration
const carIcon = new L.Icon({
  iconUrl: 'https://images.vexels.com/media/users/3/154573/isolated/preview/bd08e000a449288c914d851cb9dae110-hatchback-car-top-view-silhouette-by-vexels.png', // Replace with your car icon URL
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});


// Simulated route for the vehicle
const routeCoordinates = [
  [17.4409, 78.3916], // Madhapur (near Cyber Towers) :contentReference[oaicite:1]{index=1}
  [17.4480, 78.3885], // On HITEC City Main Road
  [17.4500, 78.3920], // Approaching Durgam Cheruvu
  [17.4477, 78.3990], // On Durgam Cheruvu Bridge :contentReference[oaicite:2]{index=2}
  [17.4425, 78.4035], // Entering Jubilee Hills Rd (after bridge)
  [17.4380, 78.4065], // Road No. 36 area
  [17.4350, 78.4140], // Near Jubilee Hills Checkpost
  [17.4300, 78.4280], // Merging toward Panjagutta Junction
  [17.4270, 78.4421], // Panjagutta junction
  [17.4235, 78.4458], // Erramanzil Crossroads
  [17.4172, 78.4479], // Khairatabad Circle :contentReference[oaicite:3]{index=3}
  [17.4092, 78.4570], // Lakdikapul (crossing traffic artery)
  [17.4065, 78.4629], // Begumpet/Nampally area
  [17.4015, 78.4692], // Abids/Main Urban Rd
  [17.3960, 78.4735], // Koti/Sultan Bazaar frontage
  [17.3885, 78.4740], // Sultan Bazaar stretch :contentReference[oaicite:4]{index=4}
  [17.3841, 78.4742], // Mozamjahi / near Afzal Gunj
  [17.3765, 78.4743], // Crossing Musi river banks
  [17.3713, 78.4744], // Approaching Pathargatti
  [17.3640, 78.4746], // In front of Laad Bazaar lanes
  [17.3616, 78.4747], // *Charminar* plaza :contentReference[oaicite:5]{index=5}
];


// ...existing code...

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState(routeCoordinates[0]);
  const [routeIndex, setRouteIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const startSimulation = () => {
    setRouteIndex(0);
    setCurrentPosition(routeCoordinates[0]);
    setIsMoving(true);
    setIsPaused(false);
  };

  const pauseSimulation = () => {
    setIsPaused(true);
  };

  const resumeSimulation = () => {
    setIsPaused(false);
    setIsMoving(true);
  };

  React.useEffect(() => {
    if (isMoving && !isPaused) {
      const intervalId = setInterval(() => {
        setRouteIndex((prevIndex) => {
          if (prevIndex < routeCoordinates.length - 1) {
            setCurrentPosition(routeCoordinates[prevIndex + 1]);
            return prevIndex + 1;
          } else {
            clearInterval(intervalId);
            setIsMoving(false);
            return prevIndex;
          }
        });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isMoving, isPaused]);

  return (
    <div>
      <Navbar />
      <MapContainer
        center={routeCoordinates[0]}
        zoom={14}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polyline positions={routeCoordinates} color="red" />
        <Marker position={currentPosition} icon={carIcon}>
          <Popup>
            <VehiclePopup/>
             
          </Popup>
        </Marker>
      </MapContainer>

      {/* Buttons to control the simulation */}
    {/* Buttons to control the simulation */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', gap: '10px' }}>
      <button onClick={startSimulation} className="sim-btn start">Start</button>
<button onClick={pauseSimulation} disabled={!isMoving || isPaused} className="sim-btn pause">Pause</button>
<button onClick={resumeSimulation} disabled={!isPaused} className="sim-btn play">Play</button>
      </div>    
    </div>
  );
};

export default Map;