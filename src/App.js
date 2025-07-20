// src/App.js

import React from 'react';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
       <h1 style={{
        textAlign: 'center',
        color: '#2bd3caff',
        margin: '12px 0 12px 0',
        fontWeight: 'bold',
        letterSpacing: '1px',
        fontSize: '1.5rem'
      }}>Vehicle Movement on a Map</h1>
      <Map />
    </div>
  );
}

export default App;
