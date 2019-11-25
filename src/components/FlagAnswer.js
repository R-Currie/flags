import React from 'react';

const FlagAnswer = ({correct, answer, onNext}) => (
    <div>
      {correct ?
        `Correct!: ${answer}` :
        `Incorrect! Correct Answer: ${answer}`}
      <button onClick={onNext}>New Game</button>
    </div>
  );

export default FlagAnswer;