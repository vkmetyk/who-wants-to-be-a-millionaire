import React from 'react';

const GameOver = ({score, changeGameState}) => {
  const clickToggle = (event) => {
    event.preventDefault();
    changeGameState(2);
  };

  return (
    <div className="game-over">
      <img
        alt="hand up"
        className="menu__hand"
        src="/assets/hand.svg"
      />
      <div className="menu__logic">
        <div>
          <p className="game-over__total">Total&nbsp;score:</p>
          <h1 className="game-over__score">
            ${score || '0'}&nbsp;earned
          </h1>
        </div>
        <a
          href="/"
          className="menu__button"
          onClick={clickToggle}
        >
          Try&nbsp;again
        </a>
      </div>
    </div>
  );
};

export default GameOver;