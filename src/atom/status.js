import { atom } from "recoil";


 export const loadingState=atom({
    key:"loadingState",
    default:false

})
export const errState=atom({
    key:'errState',
    default:false
})
export const jwtTokenState=atom(
    {
        key:'jwtTokenState',
        default:''
    }
)
export const refreshTokenState=atom(
    {
        key:'refreshTokenState',
        default:''
    }
)