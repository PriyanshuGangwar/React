import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { Timer, Stopwatch} from './components/Stopwatch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Timer />
        <Stopwatch />
      </header>
    </div>
  );
}

export default App;
