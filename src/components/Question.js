import React from 'react';
import "../stylesheet/Question.scss";
import  {QuestionCard } from './QuestionCard';
import Timer from './Timer';
function Header()
{
  return(
    <div className='header'>
      <div className='header-container'>
        <p>General Apptitude</p>
        <Timer />
        <button>Submit</button>
      </div>
    </div>
  );
};





function Question(){
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
export default Question;