import {fromJS} from 'immutable';

const defaultState = fromJS({
    modalVisible:false
});

export default (state=defaultState,action) => {
    // 打开登录注册弹窗
    if(action.type === 'show_modal'){
        console.log(action)
        return state.set('modalVisible',true)
    }
    // 关闭登录注册弹窗
    if(action.type === 'cancel_modal'){
        console.log(action)
        return state.set('modalVisible',false)
    }
    
    return state
}
