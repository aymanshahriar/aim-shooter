
import { useNavigate } from 'react-router-dom';

export default function Welcome({ resetGame }) {
  const navigate = useNavigate();

  const startGame = () => {
    resetGame();
    navigate('/game');
  };

  return (
    <div>
      <h1>Aim Shooter</h1>
      <p>This is a game where you need to shoot the targets as accurately as possible.</p>
      <p>The game is simple, you need to click on the targets as accurately as possible.</p>
      <p>The game is timed, and you need to shoot as many targets as possible in the given time.</p>
      <p>The game is over when the time is up.</p>

      <button className="f6 link dim ph3 pv2 mb2 dib white bg-dark-green" href="#0" onClick={startGame}>
        Start Game
      </button>
    </div>
  );
}