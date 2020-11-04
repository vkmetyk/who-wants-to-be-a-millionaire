import React, {useEffect} from 'react';
import TextContainer from '../TextContainer';

const Score = ({ prices, currentLevel }) => {
  useEffect(() => {
    document.querySelectorAll('.game__score > div')
      .forEach(el => {
        el.style.height = 100 / prices.length + '%';
      })
  }, [prices]);

  return (
    <div className="game__score">
      {prices.map((price, index, array) =>
        <div
          key={index}
          className={
            (currentLevel > index && "past") ||
            (currentLevel === index && "current") || ''
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