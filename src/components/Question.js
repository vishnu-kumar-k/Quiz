import React from 'react';
import "../stylesheet/Question.scss";
import { Clock } from './Clock';
import { QuestionCard } from './QuestionCard';
function Header()
{
  return(
    <div className='header'>
      <div className='header-container'>
        <p>General Apptitude</p>
        <p><Clock /></p>
        <button>Submit</button>
      </div>
    </div>
  );
};





export  const Question = () => {
  return (
    <div className='container'>
      {Header()}
      <div className='question'>
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        </div>
        
    </div>
  );
}