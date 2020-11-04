import React, {useState, useEffect} from 'react';
import TextContainer from '../TextContainer';
import setButtonView from '../../addition-functions/setButtonView';

const AnswerBlock = ({ answers, correctAnswer, setAnswer }) => {
  const [state, setState] = useState(true);

  useEffect(() => {
    setState(true);
  }, [answers]);

  if (!answers)
    return null;

  const clickToggle = (event) => {
    if (state) {
      setState(false);

      let answerId = +event.target.parentNode.querySelector('path').dataset.index;

      setButtonView(event.target.parentNode, correctAnswer === answerId ? 'correct' : 'wrong');
      setTimeout(() => {
        event.target.parentNode.classList.remove(correctAnswer === answerId ? 'correct' : 'wrong')
        if (setAnswer)
          setAnswer(answerId);
      }, 500);
    }
  }

  return (
    <div className="answer-block">
      {answers.map((answer, index) =>
        <TextContainer key={index} clickEvent={clickToggle} index={index}>
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