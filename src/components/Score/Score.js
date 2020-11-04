import React from 'react';
import TextContainer from '../TextContainer';

const Score = ({ prices, currentLevel }) => {
  return (
    <div className="game__score">
      {prices.map((price, index, array) =>
        <div
          key={index}
          className={
            (array.length - 1 - currentLevel < index && "past") ||
            (array.length - 1 - currentLevel === index && "current") || ''
          }
        >
          <TextContainer>
            <text textAnchor="middle" className="score-text" x="50%" y="45">
              {'$' + price}
            </text>
          </TextContainer>
        </div>
      )}
    </div>
  );
};

export default Score;