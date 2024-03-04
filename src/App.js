import React, { useState, useEffect } from 'react';
import './App.css';
import 'tachyons'
import GameWindow from './components/GameWindow/GameWindow.js';

function App() {
  const [route, setRoute] = useState('welcomeScreen');
  const [score, setScore] = useState(0);
  const [targetsHit, setTargetsHit] = useState(0);
  const [avgAccuracy, setAvgAccuracy] = useState(0);
  
  useEffect(() => {
    if (targetsHit === 20) setRoute('endScreen');
  }, [targetsHit])

  const updateScoreAndTargetsHitAndAvgAccuracy = (accuracy) => {
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
    setRoute('welcomeScreen')
  }

  return (
    <div className="App">
      {route === 'welcomeScreen' ?
        <div>
          <h1>Aim Shooter Game</h1>
          <a className="f6 link dim ph3 pv2 mb2 dib white bg-dark-green" href="#0" 
            onClick={() => setRoute("gameScreen")}>
            Click To Play Game
          </a>

        </div>
        :
        (route === "gameScreen" ?
          <div>
            <h1>
              <span className='ph5'>Score: {score}</span> 
              <span className='ph5'>Accuracy Average: {avgAccuracy}%</span> 
            </h1>
            <GameWindow updateScoreAndTargetsHitAndAvgAccuracy={updateScoreAndTargetsHitAndAvgAccuracy}/>
          </div>
          :
          <div>
            <h1>Your score is: {score}</h1>
            <h1>Your average accuracy is: {avgAccuracy}%</h1>
            <a className="f6 link dim ph3 pv2 mb2 dib white bg-dark-green" href="#0"
              onClick={() => resetGame()}>
              Play Again
            </a>
          </div>
        )
      }
    </div>
  );
}

export default App;
