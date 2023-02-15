import React from 'react'
import Card from './Card'
import '../stylesheet/ContestList.scss'

const ContestList = ({contests=[]}) => {
  // console.log("inga iruken"+jwt)

  return(
    
    <div className='card-main-container'>
      {
      contests.map((contest)=>{
        return <Card contest={contest} />

    })}
  </div>
  )
   
}


export default ContestList