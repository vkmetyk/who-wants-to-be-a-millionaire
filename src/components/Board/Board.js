import React from 'react';
import QuestionBlock from './QuestionBlock';
import AnswerBlock from './AnswerBlock';

const Board = ({ question, changeScore, changeGameState }) => {

  return (
    <div className="game__board">
      <QuestionBlock question={question.title} />
      <AnswerBlock answers={question.answers} correctAnswer={question.answerNumber} />
    </div>
  );
};

export default Board;