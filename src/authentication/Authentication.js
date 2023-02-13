import React from 'react'
import LogInForm from './LogInForm'
import SignUpForm from './SignUpForm'
import '../stylesheet/Authentication.scss'
import {NotificationContainer}from 'react-notifications'
import { useRecoilState } from 'recoil'
import { emailState, passwordState, userNameState } from '../atom/auth'
const Authentication = () => {



  return (
    <main className='main-container'>
        <section className='form-container'>
        <input type="checkbox" id="chk" aria-hidden="true"/>
        <SignUpForm/>
        <LogInForm/>
        </section>
        <NotificationContainer/>
    </main>
  )
}

export default Authentication