import React, {useState, useEffect} from 'react';
import Menu from './components/Menu';
import Game from './components/Game';
import './index.css';
import GameOver from './components/GameOver';

function App() {
  const [gameState, setGameState] = useState(2);
  const [score, setScore] = useState(500);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/assets/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      // .catch(e => alert('Can not load questions :('));
  }, []);

  if (!data)
    return null;

  return (
    <>
      {gameState === 1 &&
        <Menu changeGameState={setGameState} />
      }
      {gameState === 2 &&
        <Game
          data={data}
          score={score}
          changeScore={setScore}
          changeGameState={setGameState}
        />
      }
      {gameState === 3 &&
        <GameOver
          score={score}
          changeGameState={setGameState}
        />
      }
    </>
  );
}

export default App;
