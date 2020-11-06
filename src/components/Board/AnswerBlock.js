import React, {useState, useEffect, useRef} from 'react';
import TextContainer from '../TextContainer';

const AnswerBlock = ({ answers, correctAnswer, setAnswer }) => {
  const [state, setState] = useState(true);
  const buttons = useRef();

  useEffect(() => {
    setState(true);
  }, [answers]);

  if (!answers)
    return null;

  const clickToggle = (event) => {
    if (state) {
      setState(false);

      const answerId = +event.target.closest('svg').dataset.index;

      if (answerId === correctAnswer) {
        buttons.current.children[answerId].classList.add('correct');
      } else {
        buttons.current.children[answerId].classList.add('wrong');
        buttons.current.children[correctAnswer].classList.add('correct');
      }

      setTimeout(() => {
        if (answerId === correctAnswer) {
          buttons.current.children[answerId].classList.remove('correct');
        } else {
          buttons.current.children[answerId].classList.remove('wrong');
          buttons.current.children[correctAnswer].classList.remove('correct');
        }
        setAnswer(answerId);
      }, 1500);
    }
  }

  return (
    <div className="answer-block" ref={buttons}>
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