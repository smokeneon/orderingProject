import axios from 'axios';
import * as actionTypes from './actionTypes'

export const showModal = () => ({
    type:actionTypes.SHOW_MODAL
});

export const cancelModal =()=>({
    type:actionTypes.CANCEL_MODAL
})
// 模态框从登录变为注册
export const toRegisterMain = ()=>({
    type:actionTypes.TO_REGISTER_MAIN
})

export const toLoginMain =()=>({
    type:actionTypes.TO_LOGIN_MAIN
})

export const getRegisterCode=(email)=>{
    return (dispatch) => {
        axios.get('http://').then((res)=>{

        }).catch(()=>{

        })
    }
}