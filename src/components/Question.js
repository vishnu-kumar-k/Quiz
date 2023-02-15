import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { questionState, responceState, testState } from '../atom/question';
import "../stylesheet/Question.scss";
import  {QuestionCard } from './QuestionCard';
import Timer from './Timer';






function Question(){

  const [questions,setQuestions]=useRecoilState(questionState)
  const[test,setTest]=useRecoilState(testState)
  let [responce,setResponce]=useRecoilState(responceState)
  var count=0;

  useEffect(()=>{

    questions.map((question)=>{
     
      if(count<questions.length&&responce.length<questions.length)
      {
      // count++;
      setResponce(responce=>[...responce,{"id":question.id,"selectedOptionId":-1}])
      
      }
    })  
  },[])
  return (
    <div className='container'>
      <div className='header'>
      <div className='header-container'>
        <p>{test.name}</p>
        <Timer />
        <button>Submit</button>
      </div>
    </div>
      <div className='question'>
        {
          questions.map((question)=>{
            return <QuestionCard question={question} responce={responce} setResponce={setResponce}/>
          })
        }
      </div>
        
    </div>
  );
}
export default Question;