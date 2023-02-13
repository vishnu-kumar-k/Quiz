import React from 'react'
import { useRecoilState } from 'recoil'
import { emailState, passwordState } from '../atom/auth'
import '../stylesheet/LogInForm.scss'
const LogInForm = () => {

    const [email,setEmail]=useRecoilState(emailState)
    const [password,setPassword]=useRecoilState(passwordState)

    return (
        <div className="login-form">
            <form>
                <label className='login-label' for="chk" aria-hidden="true">Login</label>
                <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                required
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                
                />
                <input 
                type="password" 
                name="pswd" 
                placeholder="Password" 
                required
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default LogInForm