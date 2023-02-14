import React from "react";
import { useRecoilState } from "recoil";
import { emailState, passwordState } from "../atom/auth";
import "../stylesheet/LogInForm.scss";
import "react-notifications/lib/notifications.css";
import axios from "../api/axios";
import { NotificationManager } from "react-notifications";
import { jwtTokenState, refreshTokenState } from "../atom/status";
import { useNavigate } from "react-router-dom";

const LogInForm = () => {
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [jwt, setJwt] = useRecoilState(jwtTokenState);
  const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenState);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/log-in", {

        
        email: email,
        password: password,
        
      },
      {
        headers:{
            "Content-Type":'application/json'
        }
      })
      .then(function (response) {
        console.log(response);
        NotificationManager.success(response.data.msg, "Success", 3000);
        setJwt(response.data.data.jwt);
        setRefreshToken(response.data.data.refreshToken);
        navigate("../");
        // localStorage.setItem('jwt',jwt)
      })
      .catch(function (error) {
        console.log(error);
        NotificationManager.error(error.data.msg, "Error", 3000);
      });
  };

  return (
    <div className="login-form">
      <form>
        <label className="login-label" htmlFor="chk" aria-hidden="true">
          Login
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          name="pswd"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={(e) => handleSubmit(e)}>Login</button>
      </form>
    </div>
  );
};

export default LogInForm;
