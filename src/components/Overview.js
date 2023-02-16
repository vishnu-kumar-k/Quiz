import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from '../api/axios';
import { allTestsState } from '../atom/auth';
import { testHistoryState } from '../atom/question';
import "../stylesheet/overview.scss"
export const Overview = () => {
  
  const[testHistory,setTestHistory]=useRecoilState(testHistoryState)
  useEffect(() => {
    const fetchtestDetails= async () => {
      try {
        const response = await axios.get('/get-user-test-history',
          {
            headers: {
              "Content-Type": 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
          }
        );
        setTestHistory(response.data.data);

      } catch (err) {
        if (err.response) {
          // Not in the 200 response range 
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
    fetchtestDetails()
  }, [])
  
  return (
    <div className='container-fluid'>
        <div className='overview'>
            <p>Total number of Quiz:6</p>
            <p>Total number of Quiz Done:{testHistory.length}</p>
            <p>Total number of Quiz Registered:{testHistory.length}</p>
        </div>
    </div>
  )
}

//For view Total no.of quiz in home page.