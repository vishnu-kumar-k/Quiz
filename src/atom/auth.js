import { atom } from "recoil"


export const userNameState=atom({
    key:'userNameState',
    default:''
})
export const emailState=atom({
    key:'emailState',
    default:''
})
export const passwordState=atom({
    key:'passwordState',
    default:''
})

export const profileState=atom({
    key:'profileState',
    default:{}
})

export const allTestsState=atom({
    key:'allTestsState',
    default:{}
})