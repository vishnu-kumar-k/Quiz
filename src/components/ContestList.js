import React from 'react'
import Card from './Card'

const ContestList = (contests=[]) => {
  console.log("inga iruken"+JSON.stringify(contests.contests))

  return(
    
    
      contests.contests.map((contest)=>{
        return <Card contest={contest}/>

    })
  
  )
   
}


export default ContestList