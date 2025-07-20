import React from 'react';

const VehiclePopup = () => (
  <div className="vehicle-popup">
    <div className="vehicle-popup-header">
      <span role="img" aria-label="car" style={{ fontSize: 18, marginRight: 6 }}>🚗</span>
      <span className="vehicle-popup-title">WIRELESS</span>
      <span className="vehicle-popup-time">
        <span role="img" aria-label="clock" style={{ marginRight: 3 }}>🕒</span>
        Jul 20, 07:09 AM
      </span>
    </div>
    <div className="vehicle-popup-address">
      <div className="scrolling-text">
        A/23/28, Vehicle Location Address
      </div>
    </div>
    <hr className="vehicle-popup-divider" />

    <div className="vehicle-popup-mainstats">
      <div>
        <div style={{ fontWeight: 700, fontSize: 16 }}>0.00</div>
        <div style={{ fontSize: 10, color: '#888' }}>km/h<br />Speed</div>
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 16 }}>0.00</div>
        <div style={{ fontSize: 10, color: '#888' }}>km<br />Distance</div>
      </div>
      <div>
        <div className="vehicle-popup-battery" style={{ fontWeight: 700, fontSize: 16 }}>16%</div>
        <div style={{ fontSize: 10, color: '#888' }}>Battery</div>
      </div>
    </div>

    <div className="vehicle-popup-stats">
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