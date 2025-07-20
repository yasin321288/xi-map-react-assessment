import React from 'react';
import '../style/VehiclePopup.css';

const VehiclePopup = () => (
  <div className="vehicle-popup">
    <div className="vehicle-popup-header">
      <span role="img" aria-label="car" style={{ fontSize: 22, marginRight: 8 }}>🚗</span>
      <span className="vehicle-popup-title">WIRELESS</span>
      <span className="vehicle-popup-time">
        <span role="img" aria-label="clock" style={{ marginRight: 4 }}>🕒</span>
        Jul 20, 07:09 AM
      </span>
    </div>
        <div className="vehicle-popup-address" style={{
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      width: '100%',
      marginBottom: '12px',
      backgroundColor: '#f8f9fa',
      padding: '8px',
      borderRadius: '4px'
    }}>
      <div style={{
        display: 'inline-block',
        animation: 'scrollLeftToRight 8s linear infinite',
        fontSize: '14px',
        fontWeight: '500',
        paddingLeft: '100%'
      }}>
        A/23/28, Vehicle Location Address
      </div>
    </div>
    <hr className="vehicle-popup-divider" />

    <div className="vehicle-popup-mainstats">
      <div>
        <div style={{ fontWeight: 700, fontSize: 18 }}>0.00</div>
        <div style={{ fontSize: 12, color: '#888' }}>km/h<br />Speed</div>
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 18 }}>0.00</div>
        <div style={{ fontSize: 12, color: '#888' }}>km<br />Distance</div>
      </div>
      <div>
        <div className="vehicle-popup-battery" style={{ fontWeight: 700, fontSize: 18 }}>16%</div>
        <div style={{ fontSize: 12, color: '#888' }}>Battery</div>
      </div>
    </div>

    <div className="vehicle-popup-statrow">
      <span className="vehicle-popup-statlabel">Total Distance</span>
      <span className="vehicle-popup-statvalue">834.89 km</span>
    </div>
    <div className="vehicle-popup-statrow">
      <span className="vehicle-popup-statlabel">Distance From Last Stop</span>
      <span className="vehicle-popup-statvalue">0.00 km</span>
    </div>
    <div className="vehicle-popup-statrow">
      <span className="vehicle-popup-statlabel">Today Running</span>
      <span className="vehicle-popup-statvalue">00h:00m</span>
    </div>
    <div className="vehicle-popup-statrow">
      <span className="vehicle-popup-statlabel">Today Max Speed</span>
      <span className="vehicle-popup-statvalue">07h:10m</span>
    </div>
    <div className="vehicle-popup-statrow">
      <span className="vehicle-popup-statlabel">Today Stopped</span>
      <span className="vehicle-popup-statvalue">00h:00m</span>
    </div>
    <div className="vehicle-popup-statrow">
      <span className="vehicle-popup-statlabel">Today Idle</span>
      <span className="vehicle-popup-statvalue">00h:00m</span>
    </div>
    <div className="vehicle-popup-statrow">
      <span className="vehicle-popup-statlabel">Current Status</span>
      <span className="vehicle-popup-statvalue">STOPPED</span>
    </div>
    <div className="vehicle-popup-statrow">
      <span className="vehicle-popup-statlabel">Today Ignition On</span>
      <span className="vehicle-popup-statvalue">00h:00m</span>
    </div>
    <div className="vehicle-popup-statrow">
      <span className="vehicle-popup-statlabel">Today Ignition Off</span>
      <span className="vehicle-popup-statvalue">00h:00m</span>
    </div>
    <div className="vehicle-popup-statrow">
      <span className="vehicle-popup-statlabel">Today AC On</span>
      <span className="vehicle-popup-statvalue">00h:00m</span>
    </div>
    <div className="vehicle-popup-statrow">
      <span className="vehicle-popup-statlabel">Today AC Off</span>
      <span className="vehicle-popup-statvalue">00h:00m</span>
    </div>
    <div className="vehicle-popup-statrow">
      <span className="vehicle-popup-statlabel">AC Off Since</span>
      <span className="vehicle-popup-statvalue">00h:00m</span>
    </div>
    <div className="vehicle-popup-statrow">
      <span className="vehicle-popup-statlabel">Ignition Off Since</span>
      <span className="vehicle-popup-statvalue">00h:00m</span>
    </div>
    <div className="vehicle-popup-statrow">
      <span className="vehicle-popup-statlabel">Ignition On</span>
      <span className="vehicle-popup-statvalue">00h:00m</span>
    </div>
    <div className="vehicle-popup-statrow">
      <span className="vehicle-popup-statlabel">AC On</span>
      <span className="vehicle-popup-statvalue">00h:00m</span>
    </div>
    <div className="vehicle-popup-statrow">
      <span className="vehicle-popup-statlabel">AC Off</span>
      <span className="vehicle-popup-statvalue">00h:00m</span>
    </div>
    <div className="vehicle-popup-statrow">
      <span className="vehicle-popup-statlabel">Ignition Value</span>
      <span className="vehicle-popup-statvalue">16 %</span>
    </div>
    <div className="vehicle-popup-icons">
      <span className="vehicle-popup-icon orange">🧭</span>
      <span className="vehicle-popup-icon blue">📍</span>
      <span className="vehicle-popup-icon green">🔔</span>
      <span className="vehicle-popup-icon pink">⚙️</span>
    </div>
  </div>
  );

export default VehiclePopup;