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
export const getRegisterCode = (username) => {
    // console.log('xxxx'+email);
    
    // console.log(Qs.stringify(email))
    return (dispatch) => {
        let data = {
            username:username
        }
        // console.log(Qs.stringify(data))
        axios({
            method:'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            url:'/api/authentication/vccode',
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
// 注册

export const toRegister = (RegisterObject)=>{
    
    return (dispatch) => {
        let data = RegisterObject;
        console.log(data)
        
        axios({
            method:'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            url:'/api/authentication/register',
            data:Qs.stringify(data)
        }).then((res)=>{
            // 跳转到登录页
            message.success(res.data.message);
            dispatch(toLoginMain());
        }).catch((error)=>{
            message.error('注册失败：',error);
            
        })
    }
}

// 登录

export const toLogin = (LoginObject)=>{
    console.log('actioncreateorLogin');
    console.log(LoginObject);
    return (dispatch) => {
        let data = LoginObject;
        axios({
            method:'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            url:'/api/authentication/login',
            data:Qs.stringify(data)
        }).then((res)=>{
            if(res.data.success){
                message.success('登录成功');
            }else{
                message.warning(res.data.message);
            }
            // message: "eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1ODIwMjgyOTAsInN1YiI6Imxlb25AaG9vYy50b3AiLCJqdGkiOiIyIiwiaWF0IjoxNTgyMDI3Njg1LCJpc3MiOiJQYXVsIiwiYXV0aG9yaXRpZXMiOiJbe1wiYXV0aG9yaXR5XCI6XCJST0xFX1VTRVJcIn1dIn0.n5drusx59x3Gt-uVTW9pYegQTXnScVqN8g3as-qeJKgSMMrst11t0U-LsW0ITE4cLURf5wxXHyA0MYxC_3Br0A"
            // status: 200
            // success: true
            dispatch(cancelModal());
        }).catch((error)=>{
            message.error('登录失败：',error);
            
        })
    }
}