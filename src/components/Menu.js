import React from 'react';

const Menu = ({ changeGameState }) => {
  const clickToggle = (event) => {
    event.preventDefault();
    changeGameState(2);
  }

  return (
    <div className="menu">
      <img
        alt="hand up"
        className="menu__hand"
        src="/who-wants-to-be-a-millionaire/assets/images/hand.svg"
      />
      <div className="menu__logic">
        <h1 className="menu__text">
          Who wants to be a&nbsp;millionaire&nbsp;?
        </h1>
        <a
          href="/"
          className="menu__button"
          onClick={clickToggle}
        >
          Start
        </a>
      </div>
    </div>
  );
};

export default Menu;