import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
// import { atom, useRecoilState } from 'recoil';
import axios from './api/axios';
import { jwtTokenState } from './atom/status';

import ContestList from './components/ContestList';
import Menu from './components/Menu'
import { Overview } from './components/Overview';



const DashBoard = () => {

    // const contestListState = atom({
    //     key: 'ContestListState', // unique ID (with respect to other atoms/selectors)
    //     default: {}, // default value (aka initial value)
    //   });
      const [contests,setContests]=useState([]);
      const[jwt,setJwt]=useRecoilState(jwtTokenState)
      useEffect(
        ()=>{
            const fetchPosts = async () => {
                try {
                  const response = await axios.get('/get-all-tests',
                  {
                    headers:{
                      "Content-Type":'application/json',
                      'Authorization':'Bearer '+jwt
                    }
                  }
                  );
                  setContests(response.data.data);
                  console.log(JSON.stringify(contests));


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
              setJwt(localStorage.getItem('jwt'))
              fetchPosts();
          


        },
        []
      )


  return (
    <>
    
    <Menu/>
    <Overview />
    <ContestList contests={contests}/>
    
    
    
    
    </>
  )
}

export default DashBoard