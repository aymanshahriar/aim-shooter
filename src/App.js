import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import 'tachyons'
import Game from './components/Game.js';
import Result from './components/Result.js';
import Welcome from './components/Welcome.js';

function App() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [targetsHit, setTargetsHit] = useState(0);
  const [avgAccuracy, setAvgAccuracy] = useState(0);
  
  useEffect(() => {
    if (targetsHit === 20) navigate('/result');
  }, [targetsHit, navigate])

  const updateStats = (accuracy) => {
    setScore(previousScore => previousScore + accuracy)
    updateAvgAccuracy(accuracy, targetsHit+1)
    setTargetsHit(previousCount => previousCount + 1);
  }

  const updateAvgAccuracy = (accuracy, count) => {
    const newAvgAccuracy = ( (avgAccuracy*(count-1)) + accuracy ) / count
    setAvgAccuracy(Math.round(newAvgAccuracy))
  }

  const resetGame = () => {
    setScore(0)
    setTargetsHit(0)
    setAvgAccuracy(0)
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome resetGame={resetGame} />} />
        <Route path='/game' element={<Game score={score} avgAccuracy={avgAccuracy} updateStats={updateStats}/>} />
        <Route path='/result' element={<Result score={score} avgAccuracy={avgAccuracy} resetGame={resetGame} />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;
