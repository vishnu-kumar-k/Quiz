import React, { useState } from 'react';
import { useEffect } from 'react';
import { NotificationManager } from 'react-notifications';
import { useRecoilState } from 'recoil';
import axios from '../api/axios';
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
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('/submit-test',
    {
        testName:test.testName,
        testId:test.testId,
        response:responce
    },
    {
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem('jwt')
        }
    }

)
    .then(function (response) {

        console.log(response)
        NotificationManager.success(response.data.msg, 'Success', 3000)
    })
    .catch(function (error) {
        // console.log("poda"+JSON.stringify( error));
        NotificationManager.error(error.data.msg, 'Error', 3000)
    });
}
  
  return (
    <div className='container'>
      <div className='header'>
      <div className='header-container'>
        <p>{test.testName}</p>
        <Timer />
        <button onClick={(e)=>handleSubmit(e)}>Submit</button>
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