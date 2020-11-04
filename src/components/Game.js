import React, {useState, useEffect} from 'react';
import Board from './Board/Board';
import Score from './Score/Score';

function getRandomQuestion(questions) {
  if (!questions)
    return null;
  return questions[Math.floor(Math.random() * questions.length)];
}

const Game = ({ data, changeScore, changeGameState }) => {
  const [game, setGame] = useState({
    currentLevel: 0,
    score: 0,
    question: null,
  });

  useEffect(() => {
    setGame(prev => ({
      ...prev,
      question: getRandomQuestion(data.questions[0].list)
    }))
  }, [data]);

  const getUserAnswer = (answer) => {
    console.log(game.score);
    if (answer !== game?.question?.answerNumber) {
      changeScore(game.score);
      changeGameState(3);
    } else if (game.currentLevel === data.questionCount - 1) {
      changeScore(data.questionPrices[data.questionCount - (game.currentLevel + 1)]);
      changeGameState(3);
    }
    else {
      setGame(prev => ({
        ...prev,
        currentLevel: prev.currentLevel + 1,
        score: data.questionPrices[data.questionCount - (game.currentLevel + 1)],
        question: getRandomQuestion(data.questions[prev.currentLevel + 1]?.list)
      }))
    }

  }

  if (!data)
    return null;

  return (
    <div className="game">
      <Board
        question={game.question}
        setAnswer={getUserAnswer}
      />
      <Score
        prices={data.questionPrices}
        currentLevel={game.currentLevel}
      />
    </div>
  )
}

export default Game;