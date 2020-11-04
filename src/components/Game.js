import React from 'react';
import Board from './Board/Board';
import Score from './Score/Score';

const Game = ({ data, score, changeScore, changeGameState }) => {
  if (!data)
    return null;

  const question = data.questions[0].list[0];

  return (
    <div className="game">
      <Board
        question={question}
        changeScore={changeScore}
        changeGameState={changeGameState}
      />
      <Score prices={data.questionPrices} score={score} />
    </div>
  )
}

export default Game;