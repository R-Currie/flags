import React from 'react';

const FlagAnswer = ({correct, answer, onNext}) => (
    <div className='flag-answer'>
      {correct ?
        `Correct!: ${answer}` :
        `Incorrect! Correct Answer: ${answer}`}
      <button text="NEXT" onClick={onNext} />
    </div>
  );

export default FlagAnswer;