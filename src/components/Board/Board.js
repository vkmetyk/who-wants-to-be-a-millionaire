import React from 'react';
import QuestionBlock from './QuestionBlock';
import AnswerBlock from './AnswerBlock';

const Board = ({ question, setAnswer }) => {
  if (!question)
    return null;

  return (
    <div className="game__board">
      <QuestionBlock question={question.title} />
      <AnswerBlock
        answers={question.answers}
        correctAnswer={question.answerNumber}
        setAnswer={setAnswer}
      />
    </div>
  );
};

export default Board;