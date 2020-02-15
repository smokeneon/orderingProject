import axios from 'axios';
import * as actionTypes from './actionTypes'
import { message } from 'antd';
import Qs from 'qs';

export const showModal = () => ({
    type: actionTypes.SHOW_MODAL
});

export const cancelModal = () => ({
    type: actionTypes.CANCEL_MODAL
})
// 模态框从登录变为注册
export const toRegisterMain = () => ({
    type: actionTypes.TO_REGISTER_MAIN
})
// 模态框从注册变为登录
export const toLoginMain = () => ({
    type: actionTypes.TO_LOGIN_MAIN
})

// 获取验证码button状态，从false改为true

export const changeGetCodeBtnToTrue =()=>({
    type:actionTypes.CHANGE_GETCODE_BTN_TO_TRUE
})

export const changeGetCodeBtnToFalse =()=>({
    type:actionTypes.CHANGE_GETCODE_BTN_TO_FALSE
})
// 获取验证码接口
export const getRegisterCode = (email) => {
    // console.log('xxxx'+email);
    
    // console.log(Qs.stringify(email))
    return (dispatch) => {
        let data = {
            email:email
        }
        console.log(JSON.stringify(data))
        console.log(Qs.stringify(data))
        axios({
            method:'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            url:'/api/vccode',
            data:Qs.stringify(data)
        }).then((res)=>{
            message.success(res.data.message);
            // history.push('/#/');
            // setTimeout( ()=>  history.go(),1600);
            // console.log(res)
        }).catch((error)=>{
            // console.log(error);
            dispatch(changeGetCodeBtnToTrue)
            message.error('失败,请稍后重试。',error);
            
        })
    }
}

export const toRegister = (RegisterObject)=>{
    console.log('actioncreateor');
    
    console.log(RegisterObject);
    
    return (dispatch) => {
        let data = RegisterObject;
        axios({
            method:'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            url:'/api/register',
            data:Qs.stringify(data)
        }).then((res)=>{
            message.success(res.data.message);
        }).catch((error)=>{
            message.error('注册失败：',error);
            
        })
    }
}