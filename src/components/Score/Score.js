import React from 'react';
import TextContainer from '../TextContainer';

const Score = ({ prices, score }) => {
  return (
    <div className="game__score">
      {prices.map((price, index) =>
        <TextContainer key={index}>
          <text textAnchor="middle" className="score-text" x="50%" y="45">
            {'$' + price}
          </text>
        </TextContainer>
      )}
    </div>
  );
};

export default Score;