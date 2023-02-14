import React, { useState } from 'react'
import "../stylesheet/Question.scss"
export const QuestionCard = () => {


  const[chosenOption,setChosenOption]=useState(-1);

  const handleClick=(a)=>{
    if(chosenOption===a)
    {
      setChosenOption(-1)
    }
    else
    {
    setChosenOption(a);
    }
  }
  return (
    <div className='card'>
        
      <p>1.Anthor name for vimal Kumar</p>
      <button className={chosenOption===1?'chosen':'' }
      onClick={()=>{handleClick(1)}}
      >Option 1</button>
      <button className={chosenOption===2?'chosen':'' }
      onClick={()=>{handleClick(2)}}>Option 2</button>
      <button className={chosenOption===3?'chosen':'' }
      onClick={()=>{handleClick(3)}}>Option 3</button>
      <button className={chosenOption===4?'chosen':'' }
      onClick={()=>{handleClick(4)}}>Option 4</button>
      </div>
  )
}
