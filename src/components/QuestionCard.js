import React, { useState } from 'react'
import "../stylesheet/Question.scss"
export const QuestionCard = ({ question ,responce,setResponce}) => {


  const [chosenOption, setChosenOption] = useState(-1);

  const handleClick = (a) => {

    
    if (chosenOption === a) {

      const tem=responce.map((res)=>{
        if(res.id===question.id){
         return(
          {
              ...res,
              "selectedOptionId":-1
          }
         )
        }
        else
        {
          return (res)
        }
  
      })
      setChosenOption(-1)
      setResponce(tem);
      
    }
    else {

      const tem=responce.map((res)=>{
        if(res.id===question.id){
          return(
           {
               ...res,
               "selectedOptionId":a
           }
          )
         }
         else
         {
           return (res)
         }
   
  
      })
      setChosenOption(a);
      setResponce(tem)
    }
  }

  console.log("in question card"+JSON.stringify(responce))
  return (
    <div className='card'>

      <p>{question.question}</p>

      {
        question.options.map((op) => {
          return (
            <button className={chosenOption === op.id ? 'chosen' : ''}
              onClick={() => { handleClick(op.id) }}>
                {op.name}
            </button>
          )
        })
      }



      
    </div>
  )
}
