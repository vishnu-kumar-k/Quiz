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