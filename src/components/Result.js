import { useNavigate } from 'react-router-dom';

export default function Result({ score, avgAccuracy, resetGame }) {
  const navigate = useNavigate();

  const playAgain = () => {
    resetGame();
    navigate('/');
  };

  return (
    <div>
      <h1>Your score is: {score}</h1>
      <h1>Your average accuracy is: {avgAccuracy}%</h1>
      <button className="f6 link dim ph3 pv2 mb2 dib white bg-dark-green" href="#0"
        onClick={playAgain}>
        Play Again
      </button>
    </div>
  );
}
