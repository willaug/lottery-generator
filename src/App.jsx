import React from 'react';
import Generator from './components/Generator/Generator';
import './App.css';
import Display from './components/Display/Display';

function App() {
  return (
    <div className="card">
      <h1>LotteryGenerator</h1>
      <Display />
      <Generator />
    </div>
  );
}

export default App;
