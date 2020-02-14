import axios from 'axios';
import * as actionTypes from './actionTypes'
import { message } from 'antd';

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

// 获取验证码接口
export const getRegisterCode = (email) => {
    console.log(email)
    return (dispatch) => {
        axios.get('http://').then((res) => {
            const data = res.data;
            //    console.log(data);
            // dispatch(addHomeList(data,page+1));
            // console.log(data);
        }).catch(() => {
            message.error('失败');

        })
    }
}