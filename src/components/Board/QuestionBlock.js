import React from 'react';

const QuestionBlock = ({ question }) => {
  return (
    <div className="question-block">
      <h2 className="question">
        {question}
      </h2>
    </div>
  );
};

export default QuestionBlock;