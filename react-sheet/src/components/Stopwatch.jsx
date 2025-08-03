import React, { useState, useRef } from 'react';

export function Timer() {
  const [timer, setTimer] = useState(0.000);
  const intervalRef = useRef(null);

  const startTimer = () => {
	  if (intervalRef.current !== null) return;

	  intervalRef.current = setInterval(() => {
	    setTimer((prev) => {
	      const newTime = +(prev - 0.1).toFixed(1); // Convert back to number
	      if (newTime <= 0) {
	        clearInterval(intervalRef.current);
	        intervalRef.current = null;
	        return 0;
	      }
	      return newTime;
	    });
	 }, 100); // every millisecond
  };


  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimer(0);
  };

  const handleChange = (e) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) setTimer(val);
  };

  return (
    <div className='Timer'>
      <input type="text" onChange={handleChange} value={timer} placeholder="Enter Seconds"/>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={resetTimer}>Reset</button>
      <p>Time left: {timer}</p>
    </div>
  );
}

export function Stopwatch() {
  const [timer, setTimer] = useState(0.0);
  const [stopwatchRunning, setstopwatchRunning] = useState(false);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
	  if (intervalRef.current !== null) return;
	  setstopwatchRunning(true)

	  intervalRef.current = setInterval(() => {
	    setTimer((prev) => {
	      const newTime = +(prev + 0.1).toFixed(1); // Convert back to number
	      if (newTime <= 0) {
	        clearInterval(intervalRef.current);
	        intervalRef.current = null;
	        return 0;
	      }
	      return newTime;
	    });
	 }, 100); // every millisecond
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimer(0.0);
    setstopwatchRunning(false)
  };

  const stopStopwatch = () => {
    clearInterval(intervalRef.current);
	intervalRef.current = null;
	setstopwatchRunning(false);
  };

  const handleChange = (e) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) setTimer(val);
  };

  return (
    <div className='Stopwatch' >
      <p>Time: {timer}</p>
      <button onClick={startStopwatch}>Start Stopwatch</button>
      <button onClick={stopStopwatch}>Stop Stopwatch</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
}
