import React from 'react';
import Ripples from 'react-ripples';

import './Generator.css';

export default function Generator() {
  return (
    <div className="generator">
      <input
        type="number"
        className="generator_input"
        placeholder="Amount of random numbers"
      />
      <Ripples>
        <button type="button" className="generator_button">
          Go it
        </button>
      </Ripples>
    </div>
  );
}
