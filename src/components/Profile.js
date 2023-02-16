import React, { useEffect, useState } from "react";
import "../stylesheet/Profile.scss";
import login from "../img/login.png";
import { Overview } from "./Overview";
import { useRecoilState } from "recoil";
import { profileState } from "../atom/auth";

import { testHistoryState } from "../atom/question";

function Profile() {
  const[profile,setProfile]=useRecoilState(profileState)
  const[testHistory,setTestHistory]=useRecoilState(testHistoryState)
  
  return (
    <div className="main-profile-container">
      <div className="profile-container">
        <img src={login} alt="" />
        <p>{profile.name}</p>
      </div>
      <Overview />
      <div className="table-container">
        <table>
          <tr>
            <th>No</th>
            <th>Contest Name</th>
            <th>Total Score</th>
            <th>Your Score</th>
            <th>Average Score</th>

          </tr>
          {
            testHistory.map((test)=>{
              return(
                <tr>
            <td>3</td>
            <td>{test.testName}</td>
            <td>50</td>
            <td>{test.score}</td>
            <td>{test.averageScore}</td>
            
          </tr>
              )
            })
          }
          
        </table>
      </div>
    </div>
  );
}

export default Profile;
