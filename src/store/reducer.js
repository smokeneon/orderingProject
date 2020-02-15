import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    modalVisible:false,
    showRegisterOrLoginMain:false,
    allowSendCode:true
});

export default (state=defaultState,action) => {
    switch (action.type){
        // 打开登录注册弹窗
        case actionTypes.SHOW_MODAL:
            return state.set('modalVisible',true);
        // 关闭登录注册弹窗
        case actionTypes.CANCEL_MODAL:
            return state.set('modalVisible',false);
        case actionTypes.TO_REGISTER_MAIN:
            return state.set('showRegisterOrLoginMain',true);
        case actionTypes.TO_LOGIN_MAIN:
            return state.set('showRegisterOrLoginMain',false);
        case actionTypes.CHANGE_GETCODE_BTN_TO_TRUE:
            return state.set('allowSendCode',true);
        case actionTypes.CHANGE_GETCODE_BTN_TO_FALSE:
            return state.set('allowSendCode',false)
        default:
            return state;
    }

 
}
