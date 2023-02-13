import React from 'react'
import { useRecoilState } from 'recoil'
import { emailState, passwordState, userNameState } from '../atom/auth'


import '../stylesheet/SignUpForm.scss'



const SignUpForm = () => {

    const [userName, setUserName] = useRecoilState(userNameState)
    const [email, setEmail] = useRecoilState(emailState)
    const [password, setPassword] = useRecoilState(passwordState)

    const handleSubmit = (e) => {

        // e.preventDefault();

        


    }
    return (
        <div className="signup-form">
            <form>
                <label for="chk" aria-hidden="true">Sign up</label>
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
                    name="pswd"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <button  onClick={(e) => handleSubmit(e)}>Sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm