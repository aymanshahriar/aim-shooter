import React, {useState} from 'react';
import '../../App.css';   // styles the center className
import './GameWindow.css';
import target from './target.svg';

const targetSizeInPx = 70;
const targetRadiusInPx = targetSizeInPx/2
const gameWindowHeightInPx = 630;
const gameWindowWidthInPx = 900;

function getRandomInt(maxInclusive) {
  return Math.round(Math.random() * maxInclusive);
}

// For some reason, adding the center class to the inner div will not center the GameWindow component. Instead, we need to create an outer div and add the center class to it
// By default, even though the target image is circular in shape, it's border is square, which means that by default clicking the corner outside of the circle will
// add to the score. So setting the borderRadius to 50% makes the border circular and fixes the issue.
function GameWindow({updateScoreAndTargetsHitAndAvgAccuracy}) {
  const [xPositionInPx, setXPositionInPx] = useState(getRandomInt(gameWindowWidthInPx-targetSizeInPx));
  const [yPositionInPx, setYPositionInPx] = useState(getRandomInt(gameWindowHeightInPx-targetSizeInPx));

  const changeTargetLocation = () => {
    setXPositionInPx(getRandomInt(gameWindowWidthInPx-targetSizeInPx))
    setYPositionInPx(getRandomInt(gameWindowHeightInPx-targetSizeInPx))
  }

  function calculateAccuracy(event) {
    var rect = event.target.getBoundingClientRect();
    var x = event.clientX - rect.left; //x position within the element.
    var y = event.clientY - rect.top;  //y position within the element.
    const distanceFromTargetInPx = Math.sqrt( ((targetRadiusInPx-x)**2) + ((targetRadiusInPx-y)**2) )
    const accuracyAsDecimal = (targetRadiusInPx-distanceFromTargetInPx)/targetRadiusInPx
    const accuracyAsPercentage = Math.round(accuracyAsDecimal*100)
    return accuracyAsPercentage
  }

  return (
    <div className='center'>               
      <div className='GameWindow'>
        <img 
          className='target' 
          src={target}  
          alt='target'
          onClick={(event) => {
            const accuracy = calculateAccuracy(event)
            updateScoreAndTargetsHitAndAvgAccuracy(accuracy)
            changeTargetLocation()
          }}
          style = {{left: `${xPositionInPx}px`, top: `${yPositionInPx}px`}}
        >
        </img> 
      </div>
    </div>
        
  );
}

export default GameWindow;