import React from 'react'
import { NotificationManager } from 'react-notifications'
import { useRecoilState } from 'recoil'
import axios from '../api/axios'
import { emailState, passwordState, userNameState } from '../atom/auth'


import '../stylesheet/SignUpForm.scss'



const SignUpForm = () => {

    const [userName, setUserName] = useRecoilState(userNameState)
    const [email, setEmail] = useRecoilState(emailState)
    const [password, setPassword] = useRecoilState(passwordState)

    const handleSubmit = (e) => {

        e.preventDefault();

        if (userName === " " || userName.length === 0) {
            return (
                NotificationManager.info('Enter valid username', 'Error', 3000)
            )
        }
        else if (password.length < 8) {
            return (
                NotificationManager.info('Password length should be atleast 8', 'Error', 3000)

            )
        }
        else if (email.length < 8) {
            return (
                NotificationManager.info('Enter your mail id', 'Error', 3000)

            )

        }
        else {
            axios.post('/sign-up',
                {
                    "name":userName,
                    "email" :email,
                    "password":password 
                },
                {
                    headers:{
                        'Content-Type':'application/json'
                    }
                }

            )
                .then(function (response) {

                    console.log(response)
                    NotificationManager.success(response.data.msg, 'Success', 3000)
                })
                .catch(function (error) {
                    console.log("poda"+JSON.stringify( error));
                    NotificationManager.error(error.data.msg, 'Error', 3000)
                });
        }





    }
    return (
        <div className="signup-form">

            <form>
                <label htmlFor="chk" aria-hidden="true">Sign up</label>
                <input
                    type="text"
                    name="txt"
                    placeholder="User name"
                    required
                    value={userName}
                    onChange={(e) => { setUserName(e.target.value) }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <input
                    type="password"
                    name="pwd"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <button onClick={(e) => handleSubmit(e)}>Sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm;