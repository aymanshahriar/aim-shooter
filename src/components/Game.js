import GameWindow from './GameWindow/GameWindow.js';

export default function Game({ score, avgAccuracy, updateStats }) {
  return (
    <div>
      <h1>
        <span className='ph5'>Score: {score}</span>
        <span className='ph5'>Accuracy Average: {avgAccuracy}%</span>
      </h1>
      <GameWindow updateStats={updateStats} />
    </div>
  );
}
