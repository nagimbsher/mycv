import React from 'react';
import Particles from 'react-particles-js';
import './App.css';

function ParticleBackground() {
  return (
    <div className="container">
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            /* More configuration */
          },
        }}
      />
      {/* Rest of your component */}
    </div>
  );
}

export default ParticleBackground;
