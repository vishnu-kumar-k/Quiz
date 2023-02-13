import React from "react";
import "../stylesheet/Profile.scss";
import login from "../img/login.png";
import { Overview } from "./Overview";

function Profile() {
  return (
    <div className="main-profile-container">
      <div className="profile-container">
        <img src={login} alt="" />
        <p>Vishnu Kumar</p>
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
            <th>Rank</th>
          </tr>
          <tr>
            <td>3</td>
            <td>Contest Name</td>
            <td>23</td>
            <td>2o</td>
            <td>23</td>
            <td>1</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Contest Name</td>
            <td>23</td>
            <td>2o</td>
            <td>23</td>
            <td>1</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Contest Name</td>
            <td>23</td>
            <td>2o</td>
            <td>23</td>
            <td>1</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Contest Name</td>
            <td>23</td>
            <td>2o</td>
            <td>23</td>
            <td>1</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Contest Name</td>
            <td>23</td>
            <td>2o</td>
            <td>23</td>
            <td>1</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Profile;
