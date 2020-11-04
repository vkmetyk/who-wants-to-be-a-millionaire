import React from 'react';
import TextContainer from '../TextContainer';
import setButtonView from '../../addition-functions/setButtonView';

const AnswerBlock = ({ answers, correctAnswer, setAnswer }) => {
  if (!answers)
    return null;

  const clickToggle = (event) => {
    console.log(event.target.name);
    setButtonView(event.target, correctAnswer === +event.target.name ? 'correct' : 'wrong');
    setTimeout(() => {
      if (setAnswer)
        setAnswer(event.target.name);
    }, 3000);
  }

  return (
    <div className="answer-block">
      {answers.map((answer, index) =>
        <TextContainer key={index} clickEvent={clickToggle} name={index}>
          <text className="answer-number" textAnchor="middle" x="50" y="45">
            {'' + String.fromCharCode(65 + index)}
          </text>
          <text className="answer-text" x="70" y="45">
            {answer}
          </text>
        </TextContainer>
      )}
    </div>
  );
};

export default AnswerBlock;